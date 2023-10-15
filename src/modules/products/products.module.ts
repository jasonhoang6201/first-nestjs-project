import { Module } from '@nestjs/common';
import { ProductsController } from './products.controler';

@Module({
  controllers: [ProductsController],
})
export class ProductsModule {}
