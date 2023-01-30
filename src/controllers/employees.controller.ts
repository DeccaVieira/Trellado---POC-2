import { Request, Response } from "express";
import { Employee } from "../protocols/employeesProtocols.js";
import employeeService from "../services/employeeService.js";

async function getEmployees(req: Request, res: Response){
  try {
    const employees = await employeeService.getEmployees();
    return res.send(employees);
  } catch (error) {
    return res.send(error).status(422);
  }
}

async function createNewEmpĺoyee(req: Request, res: Response) {
  const employee = req.body as Employee;

  try {
    await employeeService.createEmployee(employee);

    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    return res.status(409).send(error);
  }
}

const employeeController = {
  getEmployees,
  createNewEmpĺoyee,
};
export default employeeController;
