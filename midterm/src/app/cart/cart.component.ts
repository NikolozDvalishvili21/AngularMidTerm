import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface CartItem {
  product: {
    id: number;
    name: string;
    price: number;
    discount?: number; 
  };
  quantity: number;
  isNew?: boolean; 
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  total = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.updateCart();
  }

  updateCart() {
    this.cartItems = this.cartService.getCartItems();
    this.total = this.cartService.getTotalPrice();  
  }

  updateQuantity(productId: number, quantity: number) {
    this.cartService.updateQuantity(productId, quantity);
    this.updateCart(); 
  }

  removeFromCart(productId: number) {
    this.cartService.removeFromCart(productId);
    this.updateCart();  
  }

  get totalPrice(): number {
    return this.cartService.getTotalPrice();
  }
}
