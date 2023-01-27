import {Router} from "express";

const employeesRouter = Router();

employeesRouter.get("/employees");
employeesRouter.post("/employees");
employeesRouter.delete("/employees");

export default employeesRouter;