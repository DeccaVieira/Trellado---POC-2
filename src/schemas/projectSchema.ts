import joi from "joi";
import { Project } from "../protocols/projectsProtocols";

export const projectSchema = joi.object<Project>({
  name:joi.string().required(),
  description:joi.string().required(),
  employee_email:joi.string().required()
});