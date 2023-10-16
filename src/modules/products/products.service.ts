import { Injectable } from '@nestjs/common';
import { ProductsDTO } from 'src/dto/products.dto';
import { Products } from 'src/models/products.model';
@Injectable()
export class ProductsService {
  private products: Products[] = [
    {
      id: 1,
      categoryId: 1,
      name: 'Product 1',
      price: 100,
    },
    {
      id: 2,
      categoryId: 1,
      name: 'Product 2',
      price: 200,
    },
  ];
  getProducts() {
    return this.products;
  }

  getDetailProduct(id: number) {
    return this.products.find((product) => product.id === Number(id));
  }

  createProduct(newProduct: ProductsDTO): Products {
    const temp = {
      id: this.products.length + 1,
      ...newProduct,
    };
    this.products.push(temp);
    return temp;
  }

  updateProduct(id: number, updateProduct: ProductsDTO): Products {
    const index = this.products.findIndex(
      (product) => product.id === Number(id),
    );
    if (index === -1) return null;
    this.products[index] = {
      ...this.products[index],
      ...updateProduct,
    };
    return this.products[index];
  }

  deleteProduct(id: number): boolean {
    const index = this.products.findIndex((product) => product.id === id);
    if (index === -1) return false;
    this.products.splice(index, 1);
    return true;
  }
}
