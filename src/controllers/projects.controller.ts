import { Request, Response } from "express";
import { Project } from "../protocols/projectsProtocols.js";
import projectService from "../services/projectService.js";

async function getProjects(req: Request, res: Response) {
  try {
    const projects = await projectService.getProjects();
    res.send(projects);
  } catch (error) {
    res.status(422).send(error);
  }
}

async function createNewProject(req: Request, res: Response) {
  const project = req.body as Project;

  try {
    await projectService.createProject(project);

    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    return res.status(409).send(error);
  }
}

export async function deleteProjectById(req: Request, res: Response) {
  const projectId = Number(req.params.projectId);

  try {
    await projectService.deleteProject(projectId);
    return res.send("Excluído com sucesso");
  } catch (error) {
    return res
      .status(422)
      .send({ error: error, msg: "Não foi possível excluir o projeto" });
  }
}

const projectController = {
  getProjects,
  createNewProject,
  deleteProjectById,
};
export default projectController;
