import { prisma } from "@prisma/client";
import { Project } from "../protocols/projectsProtocols.js";
import projectRepository from "../repositories/projectsRepository.js";


export async function getProjects(){
const projects = await projectRepository.getProjects();
return projects;
}

export async function createProject(project:Project){
  
await projectRepository.registrationProject(project);

}


const projectService = {
getProjects,
createProject
}

export default projectService;