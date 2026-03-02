import dotenv from "dotenv";
import app from "./src/app.js";
import { connectDB } from "./src/config/db.js";
import { seedAdmin } from "./src/utils/seedAdmin.js";
import fs from "fs";

dotenv.config();

if (!fs.existsSync("uploads")) {
  fs.mkdirSync("uploads");
}

connectDB();
seedAdmin();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
