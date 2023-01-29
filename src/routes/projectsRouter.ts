import {Router} from "express";
import projectController from "../controllers/projects.controller.js";


const projectsRouter = Router();

projectsRouter.get("/projects", projectController.getProjects);
projectsRouter.post("/projects");
projectsRouter.put("/projects");
projectsRouter.delete("/projects");

export default projectsRouter;