import { Employee } from "../protocols/employeesProtocols.js";
import employeeRepository from "../repositories/employeesRepository.js";

export async function getEmployees() {
  const employees = await employeeRepository.getEmployees();
  return employees;
}

export async function createEmployee(employee: Employee) {
  await employeeRepository.registrationEmployee(employee);
}

const employeeService = {
  getEmployees,
  createEmployee,
};

export default employeeService;
