import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { AddToCartService } from 'src/app/shared/services/add-to-cart.service';
import { CartDetailsService } from 'src/app/shared/services/cart-details.service';
import { Router } from '@angular/router';
import { OrderComponent } from '../order/order.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  products: any[];
  totalPrice: number = 0;
  count: any;
  constructor(private details: CartDetailsService, private cart: AddToCartService, private router: Router, public dialog: MatDialog, ) {
    details.cartData.subscribe((products) => {
      this.products = products;
    });
    cart.cartCount.subscribe((count) => {
      this.count = count;
    })
    for (let i = 0; i < this.products.length; i++) {
      this.products[i]['Total'] = this.products[i]['Price'] * this.products[i]['Quantity'];
      this.totalPrice += this.products[i]['Total'];
      details.getTotal(this.totalPrice);
    }
  }
  ngOnInit() { }
  addToCart(product) {
    this.cart.addCount(++this.count);
    ++product.Quantity;
    product.Total = product.Quantity * product.Price;
    this.totalPrice = 0;
    for (let i = 0; i < this.products.length; i++) {
      this.products[i]['Total'] = this.products[i]['Price'] * this.products[i]['Quantity'];
      this.totalPrice += this.products[i]['Total'];
    }
  }
  removeFromCart(product) {
    if (this.count === 0 || product.Quantity === 0) {
      this.count = 0;
      product.Quantity = 0;
    }
    else {
      this.cart.removeCount(--this.count);
      --product.Quantity;
      product.Total = product.Quantity * product.Price;
    }
    this.totalPrice -= product['Price'];
    if (this.totalPrice <= 0) {
      this.totalPrice = 0;
    }
  }
  openDialog() {
    if (localStorage.getItem('user')) {
      const dialogRef = this.dialog.open(OrderComponent, {
        width: '650px',
      });
      dialogRef.afterClosed().subscribe(result => {
      });
    }
    else {
      Swal.fire({
        title: 'Please Login to proceed',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Login',
      }).then((result) => {
        if (result.value) {
          this.router.navigateByUrl('login');
        }
      })
    }
  }
}
