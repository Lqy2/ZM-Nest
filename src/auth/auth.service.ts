import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import { sendAdminSideVerificationCode } from '../../utils/aliyunSms.js';
import { generateRandomNumber } from '../../utils/randomUtils.js';
import { CreateUserDto } from './dto/create-user.dto';
import { Role, UserStatus } from '../generated/prisma';
import type { User } from '../generated/prisma';
import * as bcrypt from 'bcrypt';
import type { LoginDtoPassword, LoginDtoSmsCode } from './dto/login.dto';
import type { SmsCodeResultDto } from './dto/sms-code.dto';
import type { DeleteUserResultDto } from './dto/delete-user-result.dto';
import { UnauthorizedException } from '@nestjs/common';

export type RegisterResult = User | { message: string };
type AuthenticatedUser = Omit<User, 'passwordHash'>;
type LoginPayloadUser = Pick<LoginDtoPassword, 'phone'> & {
  id?: string;
  roles?: Role[] | string[];
};
type LoginPayloadSmsUser = Pick<LoginDtoSmsCode, 'phone' | 'smsCode'> & {
  id?: string;
  roles?: Role[] | string[];
};

@Injectable()
export class AuthService {
  constructor(
    // 注入 UsersService 和 JwtService
    private usersService: UsersService,
    private jwtService: JwtService,
    private prismaService: PrismaService,
  ) {}

  //验证用户名和密码
  async validateUser(
    phone: string,
    pass: string,
  ): Promise<AuthenticatedUser | { message: string }> {
    const normalizedPhone = phone.trim();
    const user = await this.prismaService.user.findUnique({
      where: { phone: normalizedPhone },
    });
    const userWithPassword = await this.prismaService.user.findUnique({
      where: { phone: normalizedPhone },
      select: { passwordHash: true },
    });
    if (!user) {
      throw new UnauthorizedException('用户不存在');
    }
    const passwordHash = userWithPassword?.passwordHash;
    if (!passwordHash) {
      throw new UnauthorizedException('手机号或密码错误');
    }
    const isPasswordValid = await bcrypt.compare(pass, passwordHash);
    if (!isPasswordValid) {
      throw new UnauthorizedException('密码错误');
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { passwordHash: _, ...result } = user;
    return result as AuthenticatedUser;
  }

  // 登录用户-密码登录
  async login(user: LoginPayloadUser) {
    const normalizedRoles = (user.roles ?? [])
      .map((role) => role?.toString().toUpperCase())
      .filter(
        (role): role is Role => role === Role.ADMIN || role === Role.USER,
      );

    const payload = {
      phone: user.phone,
      sub: user.id,
      roles: normalizedRoles,
    };
    const userInfo = await this.prismaService.user.findUnique({
      where: { phone: user.phone },
    });
    return {
      access_token: this.jwtService.sign(payload),
      userInfo,
    };
  }

  // 登录用户-短信验证码登录
  async loginSmsCode(user: LoginPayloadSmsUser) {
    const normalizedCode = user.smsCode.trim();

    // 验证短信验证码
    const latestValidCode = await this.prismaService.verificationCode.findFirst(
      {
        where: {
          phone: user.phone,
          expireAt: {
            gte: new Date(),
          },
          type: 'LOGIN',
        },
        orderBy: { createdAt: 'desc' },
      },
    );
    if (!latestValidCode || latestValidCode.code !== normalizedCode) {
      return {
        message: '验证码错误',
      };
    }
    const normalizedRoles = (user.roles ?? [])
      .map((role) => role?.toString().toUpperCase())
      .filter(
        (role): role is Role => role === Role.ADMIN || role === Role.USER,
      );
    const payload = {
      phone: user.phone,
      sub: user.id,
      roles: normalizedRoles,
    };

    const userInfo = await this.prismaService.user.findUnique({
      where: { phone: user.phone },
    });
    return {
      access_token: this.jwtService.sign(payload),
      userInfo,
    };
  }

  // 发送短信验证码
  async sendSmsCode(sendSmsCodeDto): Promise<SmsCodeResultDto> {
    const { phone, type } = sendSmsCodeDto as { phone: string; type: string };
    const now = new Date();
    const oneHourAgo = new Date(now.getTime() - 60 * 60 * 1000);
    const oneDayAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000);

    // 检查1小时内是否已发送5次验证码
    const hourCount = await this.prismaService.verificationCode.count({
      where: { phone, createdAt: { gte: oneHourAgo } },
    });
    if (hourCount >= 5) {
      return {
        sent: false,
        message: '1小时内验证码发送次数已达上限（5次）',
      };
    }
    const dayCount = await this.prismaService.verificationCode.count({
      where: { phone, createdAt: { gte: oneDayAgo } },
    });
    if (dayCount >= 15) {
      return {
        sent: false,
        message: '当天验证码发送次数已达上限（15次）',
      };
    }
    // 生成6位随机验证码
    const code = generateRandomNumber(6);
    // 发送短信验证码
    await sendAdminSideVerificationCode(phone, code, '身份验证');

    const expireAt = new Date(now.getTime() + 10 * 60 * 1000);
    await this.prismaService.verificationCode.create({
      data: { phone, code, expireAt, type },
    });
    return { sent: true, message: '验证码发送成功' };
  }

  // 注册用户
  async register(createUserDto: CreateUserDto): Promise<RegisterResult> {
    const normalizedPhone = (createUserDto.phone ?? '').trim();
    const normalizedCode = (createUserDto.verificationCode ?? '').trim();

    // 验证用户信息
    await this.usersService.findOne(createUserDto.username ?? '');
    if (await this.usersService.findOne(normalizedPhone)) {
      return {
        message: '手机号已存在',
      };
    }
    if (await this.usersService.findOne(createUserDto.email ?? '')) {
      return {
        message: '邮箱已存在',
      };
    }
    // 验证短信验证码
    const latestValidCode = await this.prismaService.verificationCode.findFirst(
      {
        where: {
          phone: normalizedPhone,
          expireAt: {
            gte: new Date(),
          },
          type: 'REGISTER',
        },
        orderBy: { createdAt: 'desc' },
      },
    );
    if (!latestValidCode || latestValidCode.code !== normalizedCode) {
      return {
        message: '验证码错误',
      };
    }
    // await this.prismaService.verificationCode.delete({
    //   where: {
    //     id: latestValidCode.id,
    //   },
    // });
    // 注册用户
    const roles = (createUserDto.roles ?? [])
      .map((role) => role?.toUpperCase())
      .filter(
        (role): role is Role => role === Role.ADMIN || role === Role.USER,
      );

    const status = createUserDto.status?.toUpperCase();
    const mappedStatus: UserStatus =
      status === UserStatus.PENDING ||
      status === UserStatus.REJECTED ||
      status === UserStatus.DISABLED
        ? status
        : UserStatus.APPROVED;

    // 密码加密
    const password = await bcrypt.hash(createUserDto.passwordHash, 10);

    return await this.prismaService.user.create({
      data: {
        username: createUserDto.username ?? '',
        name: createUserDto.name ?? '',
        phone: normalizedPhone,
        roles: roles.length ? roles : [Role.USER],
        avatarUrl: createUserDto.avatarUrl
          ? { connect: { id: Number(createUserDto.avatarUrl) } }
          : undefined,
        email: createUserDto.email ?? '',
        gender: createUserDto.gender ?? '',
        idType: createUserDto.idType ?? '',
        idNumber: createUserDto.idNumber ?? '',
        entity: createUserDto.entity ?? '',
        entityAddress: createUserDto.entityAddress ?? '',
        passwordHash: password,
        status: mappedStatus,
        powerOfAttorney: createUserDto.powerOfAttorney,
      },
    });
  }

  // 删除用户
  async deleteUser(id: string): Promise<DeleteUserResultDto> {
    await this.prismaService.user.delete({
      where: {
        id,
      },
    });
    return {
      message: '用户删除成功',
    };
  }
}
