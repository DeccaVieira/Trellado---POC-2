import {Router} from "express";

const tasksRouter = Router();

tasksRouter.get("/tasks",(req, res)=> res.send("Ok"));
tasksRouter.post("/tasks");
tasksRouter.put("/tasks");
tasksRouter.delete("/tasks");

export default tasksRouter;