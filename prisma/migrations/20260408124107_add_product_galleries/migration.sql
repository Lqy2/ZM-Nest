-- AlterTable
ALTER TABLE "NormalProduct" ADD COLUMN     "detailImages" TEXT[] DEFAULT ARRAY[]::TEXT[],
ADD COLUMN     "galleryImages" TEXT[] DEFAULT ARRAY[]::TEXT[];
