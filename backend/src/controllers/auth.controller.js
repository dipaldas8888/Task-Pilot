import Admin from "../models/Admin.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { asyncHandler } from "../utils/asyncHandler.js";

export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const admin = await Admin.findOne({ email });

  if (!admin) {
    throw { statusCode: 400, message: "Admin not found" };
  }

  const match = await bcrypt.compare(password, admin.password);

  if (!match) {
    throw { statusCode: 400, message: "Invalid credentials" };
  }

  const token = jwt.sign(
    { id: admin._id, role: "admin" },
    process.env.JWT_SECRET,
    { expiresIn: "1d" },
  );

  res.json({
    success: true,
    token,
  });
});
