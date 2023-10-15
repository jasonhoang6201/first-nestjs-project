import { Injectable } from '@nestjs/common';
@Injectable()
export class ProductsService {
  getProducts() {
    return 'List of products in service';
  }

  getDetailProduct() {
    return 'One product in service';
  }

  createProduct() {
    return 'Create product';
  }

  updateProduct() {
    return 'Update product';
  }

  deleteProduct() {
    return 'Delete product';
  }
}
