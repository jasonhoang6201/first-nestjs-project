import { Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getProducts() {
    return this.productsService.getProducts();
  }

  @Get(':productId')
  getDetailProduct() {
    return this.productsService.getDetailProduct();
  }

  @Post()
  createProduct() {
    return this.productsService.createProduct();
  }

  @Put(':productId')
  updateProduct() {
    return this.productsService.updateProduct();
  }

  @Delete(':productId')
  deleteProduct() {
    return this.productsService.deleteProduct();
  }
}
