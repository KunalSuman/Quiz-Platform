/*
  Warnings:

  - Added the required column `userid` to the `questionpaper` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "questionpaper" ADD COLUMN     "userid" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "questionpaper" ADD CONSTRAINT "questionpaper_userid_fkey" FOREIGN KEY ("userid") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
