import prisma from "../database/database.js";
import { Employee } from "../protocols/employeesProtocols.js";


async function getEmployees() {
  const data = await prisma.employees.findMany();
  return data;
}

async function registrationEmployee(employee:Employee) {
  console.log(employee,"employee")
  try{

    await prisma.employees.create({
      data: employee 
    })
    }catch (error){
      console.log(error)
    }
    
  
}


const employeeRepository = {
  getEmployees,
  registrationEmployee
}

export default employeeRepository;