import {Request, Response} from "express";
import  {Project} from '../protocols/projectsProtocols.js';
import projectService from '../services/projectService.js';


async function getProjects(req:Request, res:Response) {
  try{
const projects = await projectService.getProjects();
res.send(projects);
  } catch (error) {
    res.status(422).send(error);
  }
}

async function createNewProject(req: Request, res: Response) {
  const project = req.body as Project
 console.log(project)
  try{
    await projectService.createProject(project);
 
    res.sendStatus(201)
  }catch (error){
    console.log(error)
    return res.status(409).send(error);
  }
}

const projectController = {
  getProjects,
  createNewProject
}
export default projectController;