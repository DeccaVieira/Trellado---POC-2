import joi from "joi";
import { Employee } from "../protocols/employeesProtocols";

export const employeeSchema = joi.object<Employee>({
  username:joi.string(),
  email: joi.string(),
  role:joi.string()
});