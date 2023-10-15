import { Controller, Get, Post, Put, Delete } from '@nestjs/common';
@Controller('products')
export class ProductsController {
  @Get()
  getProducts() {
    return 'List of products';
  }

  @Get(':productId')
  getDetailProduct() {
    return 'One product';
  }

  @Post()
  createProduct() {
    return 'Create product';
  }

  @Put(':productId')
  updateProduct() {
    return 'Update product';
  }

  @Delete(':productId')
  deleteProduct() {
    return 'Delete product';
  }
}
