-- CreateTable
CREATE TABLE "TempFile" (
    "id" SERIAL NOT NULL,
    "fileKey" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiresAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TempFile_pkey" PRIMARY KEY ("id")
);
