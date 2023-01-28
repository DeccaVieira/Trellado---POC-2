import {Request, Response} from 'express';
import employeeService from '../services/employeeService.js';

async function getEmployees(req:Request, res:Response) {
  try{
const employees = await employeeService.getEmployees();
return res.send(employees );
  } catch (error) {
    return res.send(error).status(422);
  }
}

const employeeController = {
  getEmployees
}

export default employeeController;
