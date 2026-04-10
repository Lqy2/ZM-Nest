import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { PrismaService } from '@/prisma/prisma.service';

@Injectable()
export class OrderService {
  constructor(private prisma: PrismaService) {}

  generateOrderNo(): string {
    const now = new Date();
    // // 生成订单号
    const timestamp =
      now.getFullYear().toString() +
      (now.getMonth() + 1).toString().padStart(2, '0') +
      now.getDate().toString().padStart(2, '0') +
      now.getHours().toString().padStart(2, '0') +
      now.getMinutes().toString().padStart(2, '0') +
      now.getSeconds().toString().padStart(2, '0');
    const random = Math.floor(Math.random() * 10000)
      .toString()
      .padStart(4, '0');
    return `ORD${timestamp}${random}`;
  }

  // 创建订单
  async create(userId: string, createOrderDto: CreateOrderDto) {
    const { items, receiverName, receiverPhone, receiverAddress, remark } =
      createOrderDto;

    const productIds = items.map((item) => item.productId);
    const products = await this.prisma.normalProduct.findMany({
      where: { id: { in: productIds } },
    });

    if (products.length !== items.length) {
      throw new BadRequestException('部分商品不存在');
    }

    const orderItems: any[] = [];
    let totalAmount = 0;

    for (const item of items) {
      const product = products.find((p) => p.id === item.productId);
      if (!product) {
        throw new BadRequestException(`商品 ${item.productId} 不存在`);
      }
      if (product.stock < item.quantity) {
        throw new BadRequestException(`商品 ${product.name} 库存不足`);
      }

      const price = product.discountPrice ?? product.price;
      const subtotal = price * item.quantity;
      totalAmount += subtotal;

      orderItems.push({
        productId: product.id,
        productName: product.name,
        productImage: product.imageUrl,
        price,
        quantity: item.quantity,
        subtotal,
      });
    }

    const orderNo = this.generateOrderNo();

    const order = await this.prisma.$transaction(async (tx) => {
      for (const item of items) {
        await tx.normalProduct.update({
          where: { id: item.productId },
          data: { stock: { decrement: item.quantity } },
        });
      }

      return tx.order.create({
        data: {
          orderNo,
          userId,
          totalAmount,
          payAmount: totalAmount,
          receiverName,
          receiverPhone,
          receiverAddress,
          remark,
          items: {
            create: orderItems,
          },
        },
        include: {
          items: true,
        },
      });
    });

    return order;
  }

  // 获取我的订单
  async findMyOrders(userId: string, status?: string) {
    return this.prisma.order.findMany({
      where: {
        userId,
        ...(status ? { status: status as any } : {}),
      },
      include: { items: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  // 获取订单详情
  async findOne(id: string, userId: string) {
    const order = await this.prisma.order.findUnique({
      where: { id },
      include: { items: true },
    });

    if (!order) {
      throw new NotFoundException('订单不存在');
    }
    if (order.userId !== userId) {
      throw new BadRequestException('无权查看该订单');
    }

    return order;
  }

  // 取消订单
  async cancel(id: string, userId: string) {
    const order = await this.findOne(id, userId);

    if (order.status !== 'PENDING') {
      throw new BadRequestException('只能取消待支付的订单');
    }

    await this.prisma.$transaction(async (tx) => {
      for (const item of order.items) {
        await tx.normalProduct.update({
          where: { id: item.productId },
          data: { stock: { increment: item.quantity } },
        });
      }

      await tx.order.update({
        where: { id },
        data: { status: 'CANCELLED' },
      });
    });

    return { message: '订单已取消' };
  }
}
