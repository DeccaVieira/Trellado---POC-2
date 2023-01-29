import {Request, Response} from "express";
import  {Task, Tasks} from '../protocols/tasks.protocols.js';
import taskService from "../services/tasksService.js";


async function getTasks(req:Request, res:Response){
  
  try{
const tasks = await taskService.getTasks();
res.send(tasks);
  } catch (error) {
    res.status(422).send(error);
  }
}
async function createNewTask(req: Request, res: Response) {
  const task = req.body as Task
 
  try{
    await taskService.createTask(task);

    res.sendStatus(201)
  }catch (error){
    console.log(error)
    return res.status(409).send(error);
  }
}

const taskController = {
  getTasks, createNewTask
}
export default taskController