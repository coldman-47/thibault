import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems = new BehaviorSubject<any[]>(
    localStorage.getItem('cart')
      ? JSON.parse(<string>localStorage.getItem('cart'))
      : []
  );

  constructor() {
    const cart = localStorage.getItem('cart');
    // if (cart) {
    //   this.cartItems.next();
    // }
  }
}
