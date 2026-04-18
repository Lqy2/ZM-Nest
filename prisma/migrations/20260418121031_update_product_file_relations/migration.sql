/*
  Warnings:

  - You are about to drop the column `coverImageId` on the `NormalProduct` table. All the data in the column will be lost.
  - You are about to drop the `_detailImages` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[detailImageId]` on the table `NormalProduct` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "NormalProduct" DROP CONSTRAINT "NormalProduct_coverImageId_fkey";

-- DropForeignKey
ALTER TABLE "_detailImages" DROP CONSTRAINT "_detailImages_A_fkey";

-- DropForeignKey
ALTER TABLE "_detailImages" DROP CONSTRAINT "_detailImages_B_fkey";

-- AlterTable
ALTER TABLE "NormalProduct" DROP COLUMN "coverImageId",
ADD COLUMN     "detailImageId" INTEGER;

-- DropTable
DROP TABLE "_detailImages";

-- CreateIndex
CREATE UNIQUE INDEX "NormalProduct_detailImageId_key" ON "NormalProduct"("detailImageId");

-- AddForeignKey
ALTER TABLE "NormalProduct" ADD CONSTRAINT "NormalProduct_detailImageId_fkey" FOREIGN KEY ("detailImageId") REFERENCES "File"("id") ON DELETE SET NULL ON UPDATE CASCADE;
