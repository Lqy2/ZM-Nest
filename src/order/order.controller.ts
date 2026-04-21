import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Query,
  Request,
} from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  // 生成订单号
  @Post()
  create(@Request() req, @Body() createOrderDto: CreateOrderDto) {
    console.log('完整的 req.user ===>', req.user);
    console.log('userId ===>', req.user?.userId);
    return this.orderService.create(req.user.userId, createOrderDto);
  }

  // 获取我的订单
  @Get('my')
  findMyOrders(@Request() req, @Query('status') status?: string) {
    return this.orderService.findMyOrders(req.user.userId, status);
  }

  // 获取订单详情
  @Get(':id')
  findOne(@Param('id') id: string, @Request() req) {
    return this.orderService.findOne(id, req.user.userId);
  }

  // 取消订单
  @Post(':id/cancel')
  cancel(@Param('id') id: string, @Request() req) {
    return this.orderService.cancel(id, req.user.userId);
  }

  // 测试支付成功（仅用于测试）
  @Post(':id/pay/test')
  async testPay(@Param('id') orderId: string) {
    // 测试用：直接标记支付成功
    return this.orderService.simulatePaymentSuccess(orderId);
  }
}
