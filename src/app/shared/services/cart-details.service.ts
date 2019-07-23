import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class CartDetailsService {
  constructor() { }
  arr: any[] = [];
  cartData = new BehaviorSubject([]);
  cartList = this.cartData.asObservable();
  oneProduct;
  total: number;
  favouriteData = new BehaviorSubject([]);
  favList = this.favouriteData.asObservable();
  fav: any[] = [];
  getFavourite(product) {
    if (this.fav.length < 1) {
      this.fav.push(product);
    }
    else {
      if (JSON.stringify(this.fav).includes(JSON.stringify(product))) {
      }
      else {
        this.fav.push(product);
      }
    }
    this.favouriteData.next(this.fav);
    return this.fav;
  }
  getTotal(total) {
    this.total = total;
  }
  getProduct(product) {
    if (this.arr.length < 1) {
      this.arr.push(product);
      product.Quantity = 1;
    }
    else {
      if (JSON.stringify(this.arr).includes(JSON.stringify(product))) {
        ++product.Quantity;
      }
      else {
        this.arr.push(product);
        product.Quantity = 1;
      }
    }
    this.cartData.next(this.arr);
    return this.arr;
  }
  singleProduct(product) {
    this.oneProduct = product;
  }
}

