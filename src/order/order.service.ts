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

    const orderItems: any[] = [];
    let totalAmount = 0;
    for (const item of items) {
      if (!item.productId) {
        throw new BadRequestException(
          '每个订单项必须要有 productId',
        );
      }
      // 商品默认数量是1
      if (!item.quantity) item.quantity = 1;
    }

    // 处理商品
    const productItems = items;
    if (productItems.length > 0) {
      const productIds = productItems.map((item) => Number(item.productId));
      const products = await this.prisma.product.findMany({
        where: { id: { in: productIds } },
      });

      for (const item of productItems) {
        const product = products.find((p) => p.id === Number(item.productId));
        if (!product)
          throw new BadRequestException(`商品 ${item.productId} 不存在`);
        if (product.stock < item.quantity)
          throw new BadRequestException(`商品 ${product.name} 库存不足`);

        const price = product.discountPrice ?? product.price;
        const subtotal = price * item.quantity;
        totalAmount += subtotal;

        orderItems.push({
          itemType: 'PRODUCT',
          productId: product.id,
          itemName: product.name,
          itemImage: null,
          price,
          quantity: item.quantity,
          subtotal,
        });
      }
    }

    if (orderItems.length === 0) {
      throw new BadRequestException('订单项不能为空');
    }

    const orderNo = this.generateOrderNo();

    return this.prisma.$transaction(async (tx) => {
      // 只有普通商品扣库存
      for (const item of productItems) {
        await tx.product.update({
          where: { id: Number(item.productId) },
          data: { stock: { decrement: item.quantity } },
        });
      }

      return tx.order.create({
        data: {
          orderNo,
          user: { connect: { id: userId } },
          totalAmount,
          payAmount: totalAmount,
          receiverName,
          receiverPhone,
          receiverAddress,
          remark,
          items: { create: orderItems },
        },
        include: { items: true },
      });
    });
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
      where: { id: Number(id) },
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
        await tx.product.update({
          where: { id: Number(item.productId!) },
          data: { stock: { increment: item.quantity } },
        });
      }

      await tx.order.update({
        where: { id: Number(id) },
        data: { status: 'CANCELLED' },
      });
    });

    return { message: '订单已取消' };
  }

  // 模拟支付成功（仅用于测试）
  async simulatePaymentSuccess(orderId: string) {
    return this.prisma.$transaction(async (tx) => {
      // 1. 更新订单状态为已支付
      const order = await tx.order.update({
        where: { id: Number(orderId) },
        data: {
          status: 'PAID',
          paidAt: new Date(),
          payAmount: { increment: 0 }, // 测试支付金额为0
        },
        include: { items: true },
      });

      // 2. 后面所有逻辑和真实支付完全一样！
      for (const item of order.items) {
        if (item.itemType === 'PRODUCT') {
          await tx.product.update({
            where: { id: Number(item.productId!) },
            data: { stock: { decrement: item.quantity } },
          });
        }
      }

      // 3. 清空购物车
      // await tx.cartItem.deleteMany({
      //   where: { cart: { userId: order.userId } },
      // });

      return {
        success: true,
        message: '✅ 模拟支付成功！',
        orderNo: order.orderNo,
      };
    });
  }
}
