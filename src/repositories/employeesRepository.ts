import prisma from "../database/database.js";


async function getEmployees() {
  const data = await prisma.employees.findMany();
  return data;
}


const employeeRepository = {
  getEmployees
}

export default employeeRepository;