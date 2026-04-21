/*
  Warnings:

  - You are about to drop the column `productImage` on the `OrderItem` table. All the data in the column will be lost.
  - You are about to drop the column `productName` on the `OrderItem` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[orderId,productId,courseId]` on the table `OrderItem` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `itemName` to the `OrderItem` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ItemType" AS ENUM ('PRODUCT', 'COURSE');

-- AlterTable
ALTER TABLE "OrderItem" DROP COLUMN "productImage",
DROP COLUMN "productName",
ADD COLUMN     "courseId" TEXT,
ADD COLUMN     "itemImage" TEXT,
ADD COLUMN     "itemName" TEXT NOT NULL,
ADD COLUMN     "itemType" "ItemType" NOT NULL DEFAULT 'PRODUCT';

-- CreateIndex
CREATE UNIQUE INDEX "OrderItem_orderId_productId_courseId_key" ON "OrderItem"("orderId", "productId", "courseId");

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_productId_fkey" FOREIGN KEY ("productId") REFERENCES "NormalProduct"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE SET NULL ON UPDATE CASCADE;
