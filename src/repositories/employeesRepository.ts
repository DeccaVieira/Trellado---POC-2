import prisma from "../database/database.js";
import { Employee } from "../protocols/employeesProtocols.js";

async function getEmployees() {
  const data = await prisma.employees.findMany();
  return data;
}

async function registrationEmployee(employee: Employee) {
  try {
    await prisma.employees.create({
      data: employee,
    });
  } catch (error) {
    throw new Error();
  }
}

async function deleteEmployeeById(employees_id) {
  await prisma.employees.delete({
    where: { employees_id },
  });
}

const employeeRepository = {
  getEmployees,
  registrationEmployee,
  deleteEmployeeById,
};

export default employeeRepository;
