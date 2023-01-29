import { prisma } from "@prisma/client";
import { Tasks } from "../protocols/tasks.protocols.js"
import taskRepository from "../repositories/tasksRepository.js";

export async function getTasks(){
const projects = await taskRepository.getAllTasks();
return projects;
}

export async function createTask(task){
 
  
  await taskRepository.createNewTask(task);
  
  }

const taskService = {
  getTasks, createTask
  }
  
  export default taskService;
