import { Component, OnInit } from '@angular/core';
import { CartDetailsService } from 'src/app/shared/services/cart-details.service';
import { AddToCartService } from 'src/app/shared/services/add-to-cart.service';
@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.scss']
})
export class FavouriteComponent implements OnInit {
  favourites: any;
  count: number;
  constructor(private details: CartDetailsService, private cart: AddToCartService) { }
  ngOnInit() {
    this.details.favouriteData.subscribe(favourites => {
      this.favourites = favourites;
    })
  }
  singleProduct(favourite) {
    this.details.singleProduct(favourite);
  }
}
