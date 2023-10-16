import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  HttpStatus,
  Param,
  Body,
  ParseIntPipe,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { ResponseData } from 'src/types/response';
import { HttpMessage } from 'src/types/enum';
import { Products } from 'src/models/products.model';
import { ProductsDTO } from 'src/dto/products.dto';
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getProducts(): ResponseData<Products[]> {
    try {
      return new ResponseData<Products[]>(
        this.productsService.getProducts(),
        HttpStatus.OK,
        HttpMessage.SUCCESS,
      );
    } catch {
      return new ResponseData(
        null,
        HttpStatus.INTERNAL_SERVER_ERROR,
        HttpMessage.ERROR,
      );
    }
  }

  @Get(':productId')
  getDetailProduct(
    @Param('productId') productId: number,
  ): ResponseData<Products> {
    try {
      const product = this.productsService.getDetailProduct(productId);
      if (!product)
        return new ResponseData(
          null,
          HttpStatus.NOT_FOUND,
          HttpMessage.NOT_FOUND,
        );

      return new ResponseData<Products>(
        product,
        HttpStatus.OK,
        HttpMessage.SUCCESS,
      );
    } catch {
      return new ResponseData(
        null,
        HttpStatus.INTERNAL_SERVER_ERROR,
        HttpMessage.ERROR,
      );
    }
  }

  @Post()
  createProduct(@Body() newProduct: ProductsDTO): ResponseData<Products> {
    try {
      return new ResponseData<Products>(
        this.productsService.createProduct(newProduct),
        HttpStatus.OK,
        HttpMessage.SUCCESS,
      );
    } catch {
      return new ResponseData(
        null,
        HttpStatus.INTERNAL_SERVER_ERROR,
        HttpMessage.ERROR,
      );
    }
  }

  @Put(':productId')
  updateProduct(
    @Body()
    updateProduct: ProductsDTO,
    @Param('productId') productId: number,
  ) {
    try {
      const temp = this.productsService.updateProduct(productId, updateProduct);
      if (!temp)
        return new ResponseData(
          null,
          HttpStatus.NOT_FOUND,
          HttpMessage.NOT_FOUND,
        );

      return new ResponseData(temp, HttpStatus.OK, HttpMessage.SUCCESS);
    } catch {
      return new ResponseData(
        null,
        HttpStatus.INTERNAL_SERVER_ERROR,
        HttpMessage.ERROR,
      );
    }
  }

  @Delete(':productId')
  deleteProduct(
    @Param('productId', ParseIntPipe) productId: number,
  ): ResponseData<boolean> {
    try {
      const success = this.productsService.deleteProduct(productId);
      if (!success)
        return new ResponseData(
          null,
          HttpStatus.NOT_FOUND,
          HttpMessage.NOT_FOUND,
        );
      return new ResponseData(success, HttpStatus.OK, HttpMessage.SUCCESS);
    } catch {
      return new ResponseData(
        null,
        HttpStatus.INTERNAL_SERVER_ERROR,
        HttpMessage.ERROR,
      );
    }
  }
}
