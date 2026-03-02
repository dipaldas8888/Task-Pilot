import mongoose from "mongoose";

const agentSchema = new mongoose.Schema(
  {
    name: String,
    email: { type: String, unique: true },
    mobile: Number,
    password: String,
  },
  { timestamps: true },
);
export default mongoose.model("Agent", agentSchema);
