import { prisma } from "@prisma/client";
import { NewTask, Tasks, TaskUpdate } from "../protocols/tasks.protocols.js";
import taskRepository from "../repositories/tasksRepository.js";

export async function getTasks() {
  const projects = await taskRepository.getAllTasks();
  return projects;
}

export async function createTask(task) {
  await taskRepository.createNewTask(task);
}

export async function updateTask(taskId: number, task: TaskUpdate) {
  await taskRepository.getTask(taskId);
  await taskRepository.updateTaskById(taskId, task);
}

const taskService = {
  getTasks,
  createTask,
  updateTask,
};

export default taskService;
