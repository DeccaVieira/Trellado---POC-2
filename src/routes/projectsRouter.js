import {Router} from "express";

const projectsRouter = Router();

projectsRouter.get("/projects");
projectsRouter.post("/projects");
projectsRouter.put("/projects");
projectsRouter.delete("/projects");

export default projectsRouter;