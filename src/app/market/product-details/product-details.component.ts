import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartDetailsService } from 'src/app/shared/services/cart-details.service';
import { AddToCartService } from 'src/app/shared/services/add-to-cart.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: any;
  count: number;
  constructor(private router: Router, private detials: CartDetailsService, private cart: AddToCartService) { }
  ngOnInit() {
    this.cart.cartCount.subscribe((count) => {
      this.count = count;
    })
    this.product = this.detials.oneProduct;
  }
  addToCat(product) {
    this.cart.addCount(++this.count);
    this.detials.getProduct(product);
  }
  removeFromCart() {
    if (this.count === 0 || this.product.Quantity === 0) {
      this.count = 0;
      this.product.Quantity = 0;
    }
    else {
      this.cart.removeCount(--this.count);
      --this.product.Quantity;
    }
  }
  cartPage() {
    this.router.navigateByUrl('cart');
  }
}
