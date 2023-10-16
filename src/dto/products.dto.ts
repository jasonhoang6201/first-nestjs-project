import { IsNotEmpty, MinLength } from 'class-validator';

export class ProductsDTO {
  @IsNotEmpty()
  categoryId?: number;

  @IsNotEmpty()
  @MinLength(3, { message: 'Product name must be at least 3 characters' })
  name?: string;

  @IsNotEmpty()
  price?: number;
}
