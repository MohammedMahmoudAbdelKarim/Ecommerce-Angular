import { AddToCartService } from 'src/app/shared/services/add-to-cart.service';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  nav: boolean;
  count: number;
  constructor(private router: Router, private counter: AddToCartService, private authService: AuthService) {
    counter.cartCount.subscribe((count) => {
      this.count = count;
    })
  }
  ngOnInit() {
    this.router.events.subscribe(val => {
      if (val instanceof NavigationEnd) {
        if (val.url === "/" || val.url === "/home") this.nav = true;
        else this.nav = false;
      }
    })
  }
}
