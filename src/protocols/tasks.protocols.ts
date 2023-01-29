export type Tasks ={
  tasks_id: number,
  name:string,
  description:string,
  project_id:number,
  created_at:Date,
  done:boolean
}

export type Task ={
    name:string,
    description:string,
    project_id:number
}