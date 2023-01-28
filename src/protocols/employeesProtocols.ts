export type Employees ={
  employees_id? : Number,
  username:string,
  email: string,
  role:string
}

export type Employee = Omit<Employees, "employees_id" | "created_at">
