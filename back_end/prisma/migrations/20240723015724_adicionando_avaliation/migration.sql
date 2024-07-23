/*
  Warnings:

  - Added the required column `image` to the `Gender` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Gender" ADD COLUMN     "image" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Script" ADD COLUMN     "avaliation" INTEGER NOT NULL DEFAULT 0;
