import prisma from "../database/database.js";
import { Project } from "../protocols/projectsProtocols.js";

async function getProjects() {
  const data = await prisma.projects.findMany();
  return data;
}

async function registrationProject(project) {
  try {
    await prisma.projects.create({
      data: project,
    });
  } catch (error) {
    console.log(error);
  }
}
async function findEmployee(email: string) {
  const data = await prisma.employees.findFirst({
    where: { email },
  });
  return data;
}

export async function deleteProjectId(projects_id) {
  await prisma.projects.delete({
    where: { projects_id },
  });
}

async function getProjectId(projectId) {
  const data = await prisma.projects.findFirst({
    where: { projects_id: projectId },
  });
  return data;
}

const projectRepository = {
  getProjects,
  registrationProject,
  findEmployee,
  deleteProjectId,
  getProjectId,
};

export default projectRepository;
