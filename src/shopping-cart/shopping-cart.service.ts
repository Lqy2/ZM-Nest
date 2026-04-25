import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UploadService } from '../upload/upload.service';
import { AddToCartDto } from './dto/add-to-cart.dto';
import { UpdateCartQuantityDto } from './dto/update-cart-quantity.dto';
import { FilterCartDto } from './dto/filter-cart.dto';
import { ResponseHelper } from '../common/utils/response.helper';

@Injectable()
export class ShoppingCartService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly uploadService: UploadService,
  ) { }

  async addToCart(userId: string, addToCartDto: AddToCartDto) {
    const { productId, quantity = 1 } = addToCartDto;

    if (!productId) {
      throw new NotFoundException('productId 参数不能为空！前端传参有问题');
    }
    if (isNaN(productId)) {
      throw new NotFoundException('productId 必须是数字！');
    }

    const product = await this.prismaService.product.findUnique({
      where: { id: productId },
      include: {
        category: true,
      },
    });

    if (!product) {
      throw new NotFoundException(`商品ID:${productId} 不存在`);
    }

    if (product.category.itemType === 'COURSE') {
      // 检查购物车中是否已存在该课程
      const existingItem = await this.prismaService.shoppingCartItem.findUnique({
        where: {
          userId_productId: {
            userId,
            productId,
          },
        },
      });

      if (existingItem) {
        throw new NotFoundException('该课程已在购物车中，无法重复添加');
      }

      // 课程类型商品，数量只能为1
      if (quantity > 1) {
        throw new NotFoundException('课程类商品只能购买1份');
      }
    }

    return this.prismaService.shoppingCartItem.upsert({
      where: {
        userId_productId: {
          userId,
          productId,
        },
      },
      update: {
        quantity: {
          increment: quantity,
        },
      },
      create: {
        userId,
        productId,
        quantity,
      },
      include: {
        product: {
          include: {
            galleryImages: true,
          },
        },
      },
    });
  }

  async getCart(userId: string) {
    const items = await this.prismaService.shoppingCartItem.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
      include: {
        product: {
          include: {
            galleryImages: true,
            courseDetail: {
              include: {
                coverImage: true,
              },
            },
            category: true,
          },
        },
      },
    });

    const processedItems = items.map((item) => ({
      ...item,
      ...item.product,
      galleryImages: (item.product.galleryImages || []).map((file) => ({
        ...file,
        downloadUrl: this.uploadService.getSignedUrl(file.fileKey),
      })),
      coverImage: item.product.courseDetail?.coverImage
        ? {
          downloadUrl: this.uploadService.getSignedUrl(
            item.product.courseDetail.coverImage.fileKey,
          ),
        }
        : null,

    }));

    const totalQuantity = processedItems.filter(item => item.isSelected).reduce(
      (sum, item) => sum + item.quantity,
      0,
    );
    const totalPrice = processedItems.filter(item => item.isSelected).reduce(
      (sum, item) =>
        sum +
        item.quantity * (item.product.discountPrice || item.product.price),
      0,
    );

    return {
      list: processedItems,
      totalQuantity,
      totalPrice,
    };
  }

  async updateQuantity(
    userId: string,
    updateCartQuantityDto: UpdateCartQuantityDto,
  ) {
    const { productId, quantity } = updateCartQuantityDto;

    return this.prismaService.shoppingCartItem.update({
      where: {
        userId_productId: {
          userId,
          productId: Number(productId),
        },
      },
      data: { quantity },
      include: {
        product: true,
      },
    });
  }

  async toggleSelect(userId: string, productId: number) {
    const item = await this.prismaService.shoppingCartItem.findUnique({
      where: {
        userId_productId: {
          userId,
          productId,
        },
      },
    });

    if (!item) {
      throw new NotFoundException('购物车中没有该商品');
    }

    return this.prismaService.shoppingCartItem.update({
      where: {
        userId_productId: {
          userId,
          productId,
        },
      },
      data: { isSelected: !item.isSelected },
    });
  }


  async toggleAllSelect(userId: string, isSelected: boolean) {
    return this.prismaService.shoppingCartItem.updateMany({
      where: { userId },
      data: { isSelected },
    });
  }

  async removeFromCart(userId: string, productId: number) {
    return this.prismaService.shoppingCartItem.delete({
      where: {
        userId_productId: {
          userId,
          productId: Number(productId),
        },
      },
    });
  }

  async batchRemove(userId: string, productIds: number[]) {
    const result = await this.prismaService.shoppingCartItem.deleteMany({
      where: {
        userId,
        productId: {
          in: productIds.map((id) => Number(id)),
        },
      },
    });

    return {
      deletedCount: result.count,
      message: `成功删除 ${result.count} 件商品`,
    };
  }

  async clearCart(userId: string) {
    return this.prismaService.shoppingCartItem.deleteMany({
      where: { userId },
    });
  }
}
