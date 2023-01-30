export type Employees = {
  employees_id?: number;
  username: string;
  email: string;
  role: string;
};

export type Employee = Omit<Employees, "employees_id">;
