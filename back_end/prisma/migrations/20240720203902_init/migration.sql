/*
  Warnings:

  - You are about to drop the column `code` on the `Language` table. All the data in the column will be lost.
  - You are about to drop the column `flag` on the `Language` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `Script` table. All the data in the column will be lost.
  - Added the required column `difficultyId` to the `Script` table without a default value. This is not possible if the table is not empty.
  - Added the required column `genderId` to the `Script` table without a default value. This is not possible if the table is not empty.
  - Added the required column `languageId` to the `Script` table without a default value. This is not possible if the table is not empty.
  - Added the required column `summary` to the `Script` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Language_code_key";

-- AlterTable
ALTER TABLE "Language" DROP COLUMN "code",
DROP COLUMN "flag";

-- AlterTable
ALTER TABLE "Script" DROP COLUMN "description",
ADD COLUMN     "difficultyId" INTEGER NOT NULL,
ADD COLUMN     "genderId" INTEGER NOT NULL,
ADD COLUMN     "languageId" INTEGER NOT NULL,
ADD COLUMN     "notes" TEXT,
ADD COLUMN     "refs" TEXT,
ADD COLUMN     "summary" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Difficulty" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Difficulty_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Gender" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Gender_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Script" ADD CONSTRAINT "Script_difficultyId_fkey" FOREIGN KEY ("difficultyId") REFERENCES "Difficulty"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Script" ADD CONSTRAINT "Script_genderId_fkey" FOREIGN KEY ("genderId") REFERENCES "Gender"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Script" ADD CONSTRAINT "Script_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "Language"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
