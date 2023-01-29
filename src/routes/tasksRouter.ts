import {Router} from "express";
import taskController from "../controllers/tasks.controller.js";

const tasksRouter = Router();

tasksRouter.get("/tasks",taskController.getTasks);
tasksRouter.post("/tasks", taskController.createNewTask);
tasksRouter.put("/tasks");
tasksRouter.delete("/tasks");

export default tasksRouter;