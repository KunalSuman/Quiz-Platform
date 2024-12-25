/*
  Warnings:

  - Added the required column `title` to the `QuestionPaper` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "QuestionPaper" ADD COLUMN     "title" TEXT NOT NULL;
