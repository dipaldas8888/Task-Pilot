import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    firstName: String,
    phone: Number,
    notes: String,
    assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Agent",
    },
  },
  {
    timestamps: true,
  },
);
export default mongoose.model("Task", taskSchema);
