import * as TaskRepo from "../repositories/task.repository";
import { ITask } from "../models/task.model";

export const getTasks = async (): Promise<ITask[]> => {
  return await TaskRepo.getAllTasks();
};

export const getTaskById = async (id: string): Promise<ITask | null> => {
  return await TaskRepo.getTaskById(id);
};

export const addTask = async (title: string): Promise<ITask> => {
  return await TaskRepo.createTask(title);
};

export const editTask = async (
  id: string,
  update: Partial<ITask>
): Promise<ITask | null> => {
  return await TaskRepo.updateTask(id, update);
};

export const removeTask = async (id: string): Promise<ITask | null> => {
  return await TaskRepo.deleteTask(id);
};

export function updateTask(id: string, arg1: { title: any; completed: any }) {
  throw new Error("Function not implemented.");
}
