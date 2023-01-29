import joi from "joi";
import { Employee } from "../protocols/employeesProtocols";

export const employeeSchema = joi.object<Employee>({
  username:joi.string().required(),
  email: joi.string().required(),
  role:joi.string().required()
});