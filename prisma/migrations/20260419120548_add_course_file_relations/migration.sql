/*
  Warnings:

  - You are about to drop the column `coverImage` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `videoUrl` on the `Course` table. All the data in the column will be lost.
  - Added the required column `coverImageId` to the `Course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `videoUrlId` to the `Course` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Course" DROP COLUMN "coverImage",
DROP COLUMN "videoUrl",
ADD COLUMN     "coverImageId" INTEGER NOT NULL,
ADD COLUMN     "videoUrlId" INTEGER NOT NULL,
ALTER COLUMN "duration" DROP NOT NULL,
ALTER COLUMN "studentCount" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_coverImageId_fkey" FOREIGN KEY ("coverImageId") REFERENCES "File"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_videoUrlId_fkey" FOREIGN KEY ("videoUrlId") REFERENCES "File"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
