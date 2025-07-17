import { Request, Response } from "express";
import * as TaskService from "../services/task.service";

export const getTasks = async (_req: Request, res: Response) => {
  const tasks = await TaskService.getTasks();
  res.json(tasks);
};

export const createTask = async (req: Request, res: Response) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ message: "Title is required" });
  const newTask = await TaskService.addTask(title);
  res.status(201).json(newTask);
};

export const updateTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  const updatedTask = await TaskService.editTask(id, req.body);
  if (!updatedTask) return res.status(404).json({ message: "Task not found" });
  res.json(updatedTask);
};

export const deleteTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  const deletedTask = await TaskService.removeTask(id);
  if (!deletedTask) return res.status(404).json({ message: "Task not found" });
  res.json({ message: "Task deleted" });
};
