-- CreateTable
CREATE TABLE "employees" (
    "employees_id" SERIAL NOT NULL,
    "username" VARCHAR(50) NOT NULL,
    "email" VARCHAR(30) NOT NULL,
    "role" TEXT NOT NULL,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "employees_pkey" PRIMARY KEY ("employees_id")
);

-- CreateTable
CREATE TABLE "projects" (
    "projects_id" SERIAL NOT NULL,
    "name" VARCHAR(50),
    "description" VARCHAR(100),
    "employee_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "projects_pkey" PRIMARY KEY ("projects_id")
);

-- CreateTable
CREATE TABLE "tasks" (
    "tasks_id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "description" VARCHAR(100) NOT NULL,
    "web_developer_id" INTEGER NOT NULL,
    "project_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tasks_pkey" PRIMARY KEY ("tasks_id")
);

-- AddForeignKey
ALTER TABLE "projects" ADD CONSTRAINT "projects_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "employees"("employees_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "tasks" ADD CONSTRAINT "tasks_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "projects"("projects_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "tasks" ADD CONSTRAINT "tasks_web_developer_id_fkey" FOREIGN KEY ("web_developer_id") REFERENCES "employees"("employees_id") ON DELETE NO ACTION ON UPDATE NO ACTION;
