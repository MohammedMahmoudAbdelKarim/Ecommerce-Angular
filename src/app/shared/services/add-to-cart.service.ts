import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddToCartService {
  cartCount = new BehaviorSubject(0);
  currentCount = this.cartCount.asObservable();
  addCount(count: number) {
    this.cartCount.next(count);
  }
  removeCount(count: number) {
    this.cartCount.next(count);
  }
  constructor() { }
}
