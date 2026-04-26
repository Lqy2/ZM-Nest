import {
  Controller,
  Get,
  Post,
  Body,
  Delete,
  Patch,
  Param,
} from '@nestjs/common';
import { ShoppingCartService } from './shopping-cart.service';
import { AddToCartDto } from './dto/add-to-cart.dto';
import { UpdateCartQuantityDto } from './dto/update-cart-quantity.dto';
import { BatchRemoveDto } from './dto/batch-remove.dto';
import { UserId } from '../auth/user.decorator';
import { CurrentUser } from '@/auth/current-user.decorator';
import type { JwtPayload } from '@/common/interfaces/jwt-payload.interface';

@Controller('shopping-cart')
export class ShoppingCartController {
  constructor(private readonly shoppingCartService: ShoppingCartService) { }

  @Post('add')
  addToCart(@CurrentUser() user: JwtPayload, @Body() addToCartDto: AddToCartDto) {
    console.log('从 Token 解码出来的用户信息:', user);
    console.log('userId:', user?.userId);
    return this.shoppingCartService.addToCart(user.userId, addToCartDto);
  }

  @Get()
  getCart(@CurrentUser() user: JwtPayload) {
    return this.shoppingCartService.getCart(user.userId);
  }

  @Patch('quantity')
  updateQuantity(
    @CurrentUser() user: JwtPayload,
    @Body() updateCartQuantityDto: UpdateCartQuantityDto,
  ) {
    return this.shoppingCartService.updateQuantity(
      user.userId,
      updateCartQuantityDto,
    );
  }

  // 切换商品选中状态
  @Patch('toggle-select/:productId')
  toggleSelect(
    @CurrentUser() user: JwtPayload,
    @Param('productId') productId: number,
  ) {
    return this.shoppingCartService.toggleSelect(user.userId, Number(productId));
  }

  // 删除商品
  @Delete('remove/:productId')
  removeFromCart(
    @CurrentUser() user: JwtPayload,
    @Param('productId') productId: number,
  ) {
    return this.shoppingCartService.removeFromCart(user.userId, Number(productId));
  }


  // 批量删除商品
  @Delete('batch-remove')
  batchRemove(
    @CurrentUser() user: JwtPayload,
    @Body() batchRemoveDto: BatchRemoveDto,
  ) {
    return this.shoppingCartService.batchRemove(
      user.userId,
      batchRemoveDto.productIds,
    );
  }
  
// 一键全选/取消全选
@Patch('toggle-all-select')
toggleAllSelect(
  @CurrentUser() user: JwtPayload,
  @Body() body: { isSelected: boolean },
) {
  return this.shoppingCartService.toggleAllSelect(user.userId, body.isSelected);
}


  // 清空购物车
  @Delete('clear')
  clearCart(@CurrentUser() user: JwtPayload) {
    return this.shoppingCartService.clearCart(user.userId);
  }
}
