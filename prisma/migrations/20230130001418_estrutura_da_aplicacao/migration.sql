/*
  Warnings:

  - You are about to drop the column `employee_id` on the `projects` table. All the data in the column will be lost.
  - You are about to drop the column `web_developer_id` on the `tasks` table. All the data in the column will be lost.
  - Added the required column `employee_email` to the `projects` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "projects" DROP CONSTRAINT "projects_employee_id_fkey";

-- DropForeignKey
ALTER TABLE "tasks" DROP CONSTRAINT "tasks_web_developer_id_fkey";

-- AlterTable
ALTER TABLE "projects" DROP COLUMN "employee_id",
ADD COLUMN     "employee_email" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "tasks" DROP COLUMN "web_developer_id",
ADD COLUMN     "done" BOOLEAN DEFAULT false;
