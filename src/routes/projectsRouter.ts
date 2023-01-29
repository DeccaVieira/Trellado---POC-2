import {Router} from "express";
import projectController from "../controllers/projects.controller.js";
import { validationSchema } from "../middleware/schemaValidation.js";
import {projectSchema} from "../schemas/projectSchema.js"

const projectsRouter = Router();

projectsRouter.get("/projects", projectController.getProjects);
projectsRouter.post("/projects",validationSchema(projectSchema, 422),projectController.createNewProject);
projectsRouter.put("/projects");
projectsRouter.delete("/projects");

export default projectsRouter;