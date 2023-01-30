import joi from "joi";
import { Employee } from "../protocols/employeesProtocols";

export const employeeSchema = joi.object<Employee>({
  username: joi.string().required(),
  email: joi.number().required(),
  role: joi.valid("techlead", "webdeveloper"),
});
