import employeeRepository from "../repositories/employeesRepository.js";

export async function getEmployees(){
const employees = await employeeRepository.getEmployees();
return employees;
}

const employeeService = {
getEmployees
}

export default employeeService;