import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  carouselOptions: {};
  newSeltter: FormGroup;
  constructor() { };
  ngOnInit() {
    this.newSeltter = new FormGroup({
      email: new FormControl('')
    });
    this.carouselOptions = {
      margin: 25,
      nav: true,
      responsiveClass: true,
      responsive: {
        0: {
          items: 4,
          nav: true
        },
        600: {
          items: 4,
          nav: true
        },
        1000: {
          items: 4,
          nav: true,
          loop: true,
        },
        1500: {
          items: 4,
          nav: true,
        }
      }
    }
  }
}