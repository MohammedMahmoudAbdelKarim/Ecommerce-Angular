import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Options } from 'ng5-slider';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { ProductsService } from 'src/app/shared/services/products.service';
import { AddToCartService } from 'src/app/shared/services/add-to-cart.service';
import { CartDetailsService } from 'src/app/shared/services/cart-details.service';
@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.scss']
})
export class MarketComponent implements OnInit {
  count: any;
  ourProducts: any[];
  products: any;
  constructor(private productService: ProductsService,
    private config: NgbRatingConfig,
    private cart: AddToCartService,
    private cartDetails: CartDetailsService) {
    this.config.max = 5;
    this.productService.products.subscribe((product) => {
      this.ourProducts = product;
    })
  }
  minPrice = 50;
  maxPrice = 1000;
  options_price: Options = {
    floor: 50,
    ceil: 1000,
    step: 50,
    noSwitching: true
  };
  watches: FormControl = new FormControl();
  glasses: FormControl = new FormControl();
  bikes: FormControl = new FormControl();
  isWatch: string;
  isGlass: string;
  isBike: string;
  revFrom = new FormControl('0');
  revTo = new FormControl('5');
  testArr;
  ngOnInit() {
    this.productService.products.subscribe((product) => {
      this.products = product;
    })
    this.cart.cartCount.subscribe((count) => {
      this.count = count;
    })
    this.watches.valueChanges.subscribe(value => {
      if (value) {
        this.isWatch = "Watch";
      }
      else {
        this.isWatch = undefined;
      }
    });
    this.glasses.valueChanges.subscribe(value => {
      if (value) {
        this.isGlass = 'Glass';
      }
      else {
        this.isGlass = undefined;
      }
    });
    this.bikes.valueChanges.subscribe(value => {
      if (value) {
        this.isBike = "Bike";
      }
      else {
        this.isBike = undefined;
      }
    });
  }
  addToCart() {
    this.cart.addCount(++this.count);
  }
  fliter() {
    this.productService.products.subscribe((product) => {
      this.ourProducts = product;
    })
    this.testArr = this.ourProducts
      .filter(product => {
        if (product.Price >= this.minPrice && product.Price <= this.maxPrice) return product;
        else product;
      })
      .filter(product => {
        if (product.Category === this.isWatch) return product;
        else if (product.Category === this.isBike) return product;
        else if (product.Category === this.isGlass) return product;
        else if (this.isWatch === undefined && this.isBike === undefined && this.isGlass === undefined) return product;
      })
      .filter(product => {
        if (product.Rate >= this.revFrom.value && product.Rate <= this.revTo.value) return product;
      })
    this.ourProducts = this.testArr;
    this.products = this.testArr;
  }
  sendProduct(product) {
    this.cartDetails.getProduct(product);
  }
  singleProduct(product) {
    this.cartDetails.singleProduct(product);
  }
  sendFavourite(product) {
    this.cartDetails.getFavourite(product);
  }
}
