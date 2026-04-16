// import { PrismaService } from '@/prisma/prisma.service';

// export async function deleteOldFile(prisma: PrismaService, fileId?: number) {
//   if (!fileId) {
//     return;
//   }
//   await prisma.file.update({
//     where: { id: fileId },
//     data: { deletedAt: new Date() },
//   });
// }
