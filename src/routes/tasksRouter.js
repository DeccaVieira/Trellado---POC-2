import {Router} from "express";

const tasksRouter = Router();

tasksRouter.get("/tasks");
tasksRouter.post("/tasks");
tasksRouter.put("/tasks");
tasksRouter.delete("/tasks");

export default tasksRouter;