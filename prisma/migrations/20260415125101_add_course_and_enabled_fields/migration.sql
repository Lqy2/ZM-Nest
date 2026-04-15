/*
  Warnings:

  - Added the required column `coverImage` to the `Course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `duration` to the `Course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `videoUrl` to the `Course` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "CourseType" AS ENUM ('FREE', 'PAID');

-- AlterTable
ALTER TABLE "Course" ADD COLUMN     "coverImage" TEXT NOT NULL,
ADD COLUMN     "duration" INTEGER NOT NULL,
ADD COLUMN     "isPublished" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "previewDuration" INTEGER NOT NULL DEFAULT 300,
ADD COLUMN     "studentCount" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "type" "CourseType" NOT NULL DEFAULT 'PAID',
ADD COLUMN     "videoUrl" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "CourseCategory" ADD COLUMN     "isEnabled" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "NormalProductCategory" ADD COLUMN     "isEnabled" BOOLEAN NOT NULL DEFAULT true;
