import prisma from "../database/database.js";

async function getAllTasks() {
  const data = await prisma.tasks.findMany();
  return data;
}
async function createNewTask(task) {
  try{
    await prisma.tasks.create({
      data:task
    })
    }catch (error){
      console.log(error)
    }
    
  
}


const taskRepository = {
  getAllTasks,
  createNewTask
}

export default taskRepository;
