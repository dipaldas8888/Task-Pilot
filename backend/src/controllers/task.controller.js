import Agent from "../models/Agent.model.js";
import Task from "../models/Task.model.js";
import { distributeTasks } from "../utils/distributeTasks.js";
import XLSX from "xlsx";
import fs from "fs";
import { asyncHandler } from "../utils/asyncHandler.js";

export const uploadAndDistribute = asyncHandler(async (req, res) => {
  const agents = await Agent.find();

  // ❌ No agents
  if (!agents.length) {
    throw { statusCode: 400, message: "No agents available to assign tasks" };
  }

  if (!req.file) {
    throw { statusCode: 400, message: "File is required" };
  }

  const filePath = req.file.path;

  const workbook = XLSX.readFile(filePath);
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  const records = XLSX.utils.sheet_to_json(sheet);

  if (!records.length) {
    throw { statusCode: 400, message: "Uploaded file is empty" };
  }

  // Validate required headers
  const requiredFields = ["FirstName", "Phone", "Notes"];
  const fileHeaders = Object.keys(records[0]);

  const isValid = requiredFields.every((field) => fileHeaders.includes(field));

  if (!isValid) {
    throw {
      statusCode: 400,
      message: "Invalid CSV format. Required fields: FirstName, Phone, Notes",
    };
  }

  const distributed = distributeTasks(records, agents);

  await Task.insertMany(distributed);

  fs.unlinkSync(filePath);

  res.json({
    success: true,
    message: `Tasks distributed among ${agents.length} agents successfully`,
  });
});

export const getTasks = asyncHandler(async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;

  const total = await Task.countDocuments();

  const tasks = await Task.find()
    .populate("assignedTo", "name email mobile")
    .skip((page - 1) * limit)
    .limit(limit)
    .sort({ createdAt: -1 });

  res.json({
    success: true,
    currentPage: page,
    totalPages: Math.ceil(total / limit),
    totalTasks: total,
    data: tasks,
  });
});
