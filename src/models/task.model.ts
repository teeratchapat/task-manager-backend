import mongoose, { Document } from "mongoose";

export interface ITask extends Document {
  title: string;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const TaskSchema = new mongoose.Schema<ITask>(
  {
    title: { type: String, required: true },
    completed: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const TaskModel = mongoose.model<ITask>("Task", TaskSchema);
