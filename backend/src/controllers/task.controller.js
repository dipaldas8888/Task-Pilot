import Agent from "../models/Agent.model.js";
import Task from "../models/Task.model.js";
import { distributeTasks } from "../utils/distributeTasks.js";
import XLSX from "xlsx";
import fs from "fs";
import { asyncHandler } from "../utils/asyncHandler.js";

export const uploadAndDistribute = asyncHandler(async (req, res) => {
  const agents = await Agent.find();

  if (agents.length !== 5) {
    throw { statusCode: 400, message: "Exactly 5 agents required" };
  }

  const filePath = req.file.path;
  const workbook = XLSX.readFile(filePath);
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  const records = XLSX.utils.sheet_to_json(sheet);

  const distributed = distributeTasks(records, agents);

  await Task.insertMany(distributed);

  fs.unlinkSync(filePath);

  res.json({
    success: true,
    message: "Tasks distributed successfully",
  });
});
