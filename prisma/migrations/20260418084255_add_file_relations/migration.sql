/*
  Warnings:

  - You are about to drop the column `detailImages` on the `NormalProduct` table. All the data in the column will be lost.
  - You are about to drop the column `galleryImages` on the `NormalProduct` table. All the data in the column will be lost.
  - You are about to drop the column `imageUrl` on the `NormalProduct` table. All the data in the column will be lost.
  - You are about to drop the column `avatarUrl` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "NormalProduct" DROP COLUMN "detailImages",
DROP COLUMN "galleryImages",
DROP COLUMN "imageUrl",
ADD COLUMN     "coverImageId" INTEGER;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "avatarUrl",
ADD COLUMN     "avatarFileId" INTEGER;

-- CreateTable
CREATE TABLE "File" (
    "id" SERIAL NOT NULL,
    "fileKey" TEXT NOT NULL,
    "fileName" TEXT,
    "fileSize" INTEGER NOT NULL,
    "mimeType" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),
    "meta" JSONB,

    CONSTRAINT "File_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_galleryImages" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_galleryImages_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_detailImages" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_detailImages_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "File_fileKey_key" ON "File"("fileKey");

-- CreateIndex
CREATE INDEX "File_fileKey_idx" ON "File"("fileKey");

-- CreateIndex
CREATE INDEX "File_createdAt_idx" ON "File"("createdAt");

-- CreateIndex
CREATE INDEX "_galleryImages_B_index" ON "_galleryImages"("B");

-- CreateIndex
CREATE INDEX "_detailImages_B_index" ON "_detailImages"("B");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_avatarFileId_fkey" FOREIGN KEY ("avatarFileId") REFERENCES "File"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NormalProduct" ADD CONSTRAINT "NormalProduct_coverImageId_fkey" FOREIGN KEY ("coverImageId") REFERENCES "File"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_galleryImages" ADD CONSTRAINT "_galleryImages_A_fkey" FOREIGN KEY ("A") REFERENCES "File"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_galleryImages" ADD CONSTRAINT "_galleryImages_B_fkey" FOREIGN KEY ("B") REFERENCES "NormalProduct"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_detailImages" ADD CONSTRAINT "_detailImages_A_fkey" FOREIGN KEY ("A") REFERENCES "File"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_detailImages" ADD CONSTRAINT "_detailImages_B_fkey" FOREIGN KEY ("B") REFERENCES "NormalProduct"("id") ON DELETE CASCADE ON UPDATE CASCADE;
