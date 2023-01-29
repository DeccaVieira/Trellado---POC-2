import prisma from "../database/database.js";
import { Project } from "../protocols/projectsProtocols.js";


async function getProjects() {
  const data = await prisma.projects.findMany();
  return data;
}

// async function registrationProject(project:Project) {
//   console.log(project,"project")
//   try{
// await prisma.projects.create({
//   data: project
// })
//     }catch (error){
//       console.log(error)
//     }
    
  
// }


const projectRepository = {
  getProjects,
  // registrationProject
}

export default projectRepository;