import {Request, Response} from "express";
import  {Tasks} from '../protocols/tasks.protocols.js';
import taskService from "../services/tasksService.js";


async function getTasks(req:Request, res:Response){
  
  try{
const tasks = await taskService.getTasks();
res.send(tasks);
  } catch (error) {
    res.status(422).send(error);
  }
}

const taskController = {
  getTasks
}
export default taskController