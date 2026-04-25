import { Role } from '../../generated/prisma';

export interface JwtPayload {
  userId: string;
  name: string;
  roles: Role[];
}
