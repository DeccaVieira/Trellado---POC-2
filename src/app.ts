import express, { application } from "express";
import employeesRouter from "./routes/employeesRouter.js";
import projectsRouter from "./routes/projectsRouter.js";
import tasksRouter from "./routes/tasksRouter.js";

const server = express();

server.use(tasksRouter);
server.use(projectsRouter);
server.use(employeesRouter);

server.listen(4000, ()=> {
  console.log("Server running in port 4000")
})