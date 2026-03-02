import express from "express";
import { protect } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/upload.middleware.js";
import { uploadAndDistribute } from "../controllers/task.controller.js";

const router = express.Router();

router.post("/upload", protect, upload.single("file"), uploadAndDistribute);

export default router;
