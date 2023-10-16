import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ProductsModule } from './modules/products/products.module';

@Module({
  imports: [ProductsModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
