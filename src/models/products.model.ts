export class Products {
  id?: number;
  categoryId?: number;
  name?: string;
  price?: number;

  constructor(id: number, categoryId: number, name: string, price: number) {
    this.id = id;
    this.categoryId = categoryId;
    this.name = name;
    this.price = price;
  }
}
