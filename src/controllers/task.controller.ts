import { Request, Response } from "express";
import * as TaskService from "../services/task.service";
import { TaskModel } from "../models/task.model";

export const getTasks = async (_req: Request, res: Response) => {
  const tasks = await TaskService.getTasks();
  res.json(tasks);
};

export const getTaskById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const task = await TaskService.getTaskById(id);
  if (!task) return res.status(404).json({ message: "Task not found" });
  res.status(200).json(task);
};

export const createTask = async (req: Request, res: Response) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ message: "Title is required" });
  const newTask = await TaskService.addTask(title);
  res.status(201).json(newTask);
};

export const updateTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, completed } = req.body;

  const task = await TaskModel.findById(id);
  if (!task) return res.status(404).json({ message: "Task not found" });

  if (title !== undefined) task.title = title;
  if (completed !== undefined) task.completed = completed;

  await task.save();
  res.json(task);
};
export const deleteTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  const deletedTask = await TaskService.removeTask(id);
  if (!deletedTask) return res.status(404).json({ message: "Task not found" });
  res.json({ message: "Task deleted successfully" });
};
