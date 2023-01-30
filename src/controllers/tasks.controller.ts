import { Request, Response } from "express";
import { NewTask, TaskUpdate } from "../protocols/tasks.protocols.js";
import taskService from "../services/tasksService.js";

async function getTasks(req: Request, res: Response) {
  try {
    const tasks = await taskService.getTasks();
    res.send(tasks);
  } catch (error) {
    res.status(422).send(error);
  }
}
async function createNewTask(req: Request, res: Response) {
  const task = req.body as NewTask;

  try {
    await taskService.createTask(task);

    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    return res.status(409).send(error);
  }
}

async function putTask(req: Request, res: Response) {
  const { taskId } = req.params;
  const task = req.body as TaskUpdate;
  try {
    await taskService.updateTask(parseInt(taskId), task);
  } catch (error) {
    console.log(error);
    return res.status(409).send(error);
  }
}

const taskController = {
  getTasks,
  createNewTask,
  putTask,
};
export default taskController;
