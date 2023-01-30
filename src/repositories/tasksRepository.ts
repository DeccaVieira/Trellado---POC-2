import prisma from "../database/database.js";
import {
  NewTask,
  Task,
  Tasks,
  TaskUpdate,
} from "../protocols/tasks.protocols.js";

async function getAllTasks() {
  const data = await prisma.tasks.findMany();
  return data;
}
async function createNewTask(task) {
  try {
    await prisma.tasks.create({
      data: task,
    });
  } catch (error) {
    console.log(error);
  }
}

async function getTask(taskId: number) {
  const data = await prisma.tasks.findFirst({
    where: {
      tasks_id: taskId,
    },
  });
  return data;
}

async function updateTaskById(taskId: number, task: TaskUpdate) {
  const up = await prisma.tasks.findFirst({
    where: { tasks_id: taskId },
  });

  await prisma.tasks.update({
    where: up,
    data: task,
  });
}
const taskRepository = {
  getAllTasks,
  createNewTask,
  getTask,
  updateTaskById,
};

export default taskRepository;
