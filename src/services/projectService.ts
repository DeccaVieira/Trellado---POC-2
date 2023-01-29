import { prisma } from "@prisma/client";
import { Project } from "../protocols/projectsProtocols.js";
import projectRepository from "../repositories/projectsRepository.js";
import employeeRepository from "../repositories/employeesRepository.js";

export async function getProjects(){
const projects = await projectRepository.getProjects();
return projects;
}

export async function createProject(project:Project){
const permission = await projectRepository.findEmployee(project.employee_email);
if(permission.role !== "techlead" || !permission){
throw new Error()
}

await projectRepository.registrationProject(project);

}

export async function deleteProject(projectId){
  const project = await projectRepository.getProjectId(projectId)

 
  if(!project){
    throw new Error()
  }
 await projectRepository.deleteProjectId(projectId)
}


const projectService = {
getProjects,
createProject,
deleteProject
}

export default projectService;