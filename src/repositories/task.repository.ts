import { TaskModel, ITask } from "../models/task.model";

export const getAllTasks = async (): Promise<ITask[]> => {
  return await TaskModel.find();
};

export const createTask = async (title: string): Promise<ITask> => {
  return await TaskModel.create({ title });
};

export const updateTask = async (
  id: string,
  update: Partial<ITask>
): Promise<ITask | null> => {
  return await TaskModel.findByIdAndUpdate(id, update, { new: true });
};

export const deleteTask = async (id: string): Promise<ITask | null> => {
  return await TaskModel.findByIdAndDelete(id);
};
