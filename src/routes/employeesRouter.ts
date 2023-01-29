import {Router} from "express";
import employeeController from "../controllers/employees.controller.js";
 import { validationSchema } from "../middleware/schemaValidation.js";
import { employeeSchema } from "../schemas/employeeSchema.js";

const employeesRouter = Router();

employeesRouter.get("/employees", employeeController.getEmployees);
employeesRouter.post("/employees",validationSchema(employeeSchema, 422),employeeController.createNewEmpĺoyee);
employeesRouter.delete("/employees");

export default employeesRouter;