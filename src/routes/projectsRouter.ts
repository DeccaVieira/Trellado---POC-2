import {Router} from "express";

const projectsRouter = Router();

projectsRouter.get("/projects",(req, res)=> res.send("Ok"));
projectsRouter.post("/projects");
projectsRouter.put("/projects");
projectsRouter.delete("/projects");

export default projectsRouter;