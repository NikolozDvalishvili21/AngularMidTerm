import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  price: number;
  discount?: number;
  isNew?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Gradient Graphic T-shirt', price: 145, isNew: true },
    { id: 2, name: 'Polo with Tipping Details', price: 180, isNew: true },
    { id: 3, name: 'Black Striped T-shirt', price: 150, discount: 30 },
    { id: 4, name: 'Skinny Fit jeans', price: 260, discount: 20 },
    { id: 5, name: 'Checkered Shirt', price: 160, isNew: true },
    {
      id: 6,
      name: 'Sleeve Striped T-shirt',
      price: 160,
      discount: 30,
      isNew: true,
    },
    { id: 7, name: 'Vertical Striped Shirt', price: 232, discount: 20 },
    { id: 8, name: 'Courage Graphic T-shirt', price: 145, isNew: true },
    { id: 9, name: 'Loose Fit Bermuda Shorts', price: 80, isNew: true },
  ];

  getProducts(): Product[] {
    console.log(this.products);
    return this.products;
  }
}
