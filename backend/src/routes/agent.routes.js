import express from "express";
import { protect } from "../middlewares/auth.middleware.js";
import { validate } from "../middlewares/validate.middleware.js";
import {
  createAgent,
  getAgents,
  updateAgent,
  deleteAgent,
} from "../controllers/agent.controller.js";
import {
  createAgentSchema,
  updateAgentSchema,
} from "../validations/agent.validation.js";

const router = express.Router();

router.post("/", protect, validate(createAgentSchema), createAgent);
router.get("/", protect, getAgents);
router.put("/:id", protect, validate(updateAgentSchema), updateAgent);
router.delete("/:id", protect, deleteAgent);

export default router;
