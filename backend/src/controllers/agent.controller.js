import Agent from "../models/Agent.model.js";
import bcrypt from "bcryptjs";
import { asyncHandler } from "../utils/asyncHandler.js";

export const createAgent = asyncHandler(async (req, res) => {
  const { name, email, mobile, password } = req.body;

  const existingAgent = await Agent.findOne({ email });

  if (existingAgent) {
    throw { statusCode: 400, message: "Agent already exists with this email" };
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const agent = await Agent.create({
    name,
    email,
    mobile,
    password: hashedPassword,
  });

  res.status(201).json({
    success: true,
    message: "Agent created successfully",
    data: {
      id: agent._id,
      name: agent.name,
      email: agent.email,
      mobile: agent.mobile,
    },
  });
});

export const getAgents = asyncHandler(async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;

  const total = await Agent.countDocuments();

  const agents = await Agent.find()
    .select("-password")
    .skip((page - 1) * limit)
    .limit(limit)
    .sort({ createdAt: -1 });

  res.json({
    success: true,
    currentPage: page,
    totalPages: Math.ceil(total / limit),
    totalAgents: total,
    data: agents,
  });
});

export const updateAgent = asyncHandler(async (req, res) => {
  const agent = await Agent.findById(req.params.id);

  if (!agent) {
    throw { statusCode: 404, message: "Agent not found" };
  }

  agent.name = req.body.name || agent.name;
  agent.mobile = req.body.mobile || agent.mobile;

  await agent.save();

  res.json({
    success: true,
    message: "Agent updated successfully",
    data: agent,
  });
});

export const deleteAgent = asyncHandler(async (req, res) => {
  const agent = await Agent.findById(req.params.id);

  if (!agent) {
    throw { statusCode: 404, message: "Agent not found" };
  }

  await agent.deleteOne();

  res.json({
    success: true,
    message: "Agent deleted successfully",
  });
});
