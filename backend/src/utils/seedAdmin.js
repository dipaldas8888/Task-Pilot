import Admin from "../models/Admin.model.js";
import bcrypt from "bcryptjs";

export const seedAdmin = async () => {
  const email = "admin@taskpilot.com";
  const password = "123456";

  const exists = await Admin.findOne({ email });

  if (!exists) {
    const hashed = await bcrypt.hash(password, 10);

    await Admin.create({
      email,
      password: hashed,
    });

    console.log("✅ Default admin created");
  } else {
    console.log("ℹ️ Admin already exists");
  }
};
