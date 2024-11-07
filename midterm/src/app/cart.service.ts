import { Injectable } from '@angular/core';
import { Product } from './product.service';

interface CartItem {
  product: Product;
  quantity: number;
  isNew?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: CartItem[] = [];

  addToCart(product: Product) {
    const item = this.cart.find((item) => item.product.id === product.id);
    if (item) {
      item.quantity++;
      item.isNew = false;
    } else {
      this.cart.push({ product, quantity: 1, isNew: true });
    }
  }

  updateQuantity(productId: number, quantity: number) {
    const item = this.cart.find((item) => item.product.id === productId);
    if (item && quantity > 0) {
      item.quantity = quantity;
    } else {
      this.removeFromCart(productId);
    }
  }

  removeFromCart(productId: number) {
    this.cart = this.cart.filter((item) => item.product.id !== productId);
  }

  getCartItems(): CartItem[] {
    return this.cart;
  }

  getTotalPrice(): number {
    const totalPrice = this.cart.reduce((total, item) => {
      const discount = item.product.discount || 0;
      const price = item.product.price * (1 - discount / 100);
      return total + price * item.quantity;
    }, 0);

    // console.log('Total Price:', totalPrice);
    return totalPrice;
  }

  clearCart() {
    this.cart = [];
  }

  isCartEmpty(): boolean {
    return this.cart.length === 0;
  }
}
