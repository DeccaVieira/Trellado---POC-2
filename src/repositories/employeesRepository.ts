import prisma from "../database/database.js";
import { Employee } from "../protocols/employeesProtocols.js";


async function getEmployees() {
  const data = await prisma.employees.findMany();
  return data;
}



async function registrationEmployee(employee:Employee) {
  try{

    await prisma.employees.create({
      data: employee 
    })
    }catch (error){
      throw new Error();
    }
    
  
}


const employeeRepository = {
  getEmployees,
  registrationEmployee,
 
}

export default employeeRepository;