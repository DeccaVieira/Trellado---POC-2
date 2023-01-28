import {Router} from "express";
import employeeController from "../controllers/employees.controller.js";

const employeesRouter = Router();

employeesRouter.get("/employees", employeeController.getEmployees);
employeesRouter.post("/employees");
employeesRouter.delete("/employees");

export default employeesRouter;