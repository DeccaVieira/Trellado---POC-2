export type Projects ={
  projects_id: Number,
  name:string,
  description: string,
  employee_id: Number,
  created_at : Date
}

export type Project = Omit<Projects, "projects_id" | "created_at">
