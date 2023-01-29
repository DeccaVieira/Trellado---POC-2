import prisma from "../database/database.js";

async function getAllTasks() {
  const data = await prisma.tasks.findMany();
  return data;
}

const taskRepository = {
  getAllTasks
}

export default taskRepository;
