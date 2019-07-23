import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { HomeComponent } from './shared/home/home.component';
import { MarketComponent } from './market/market/market.component';
import { ProductDetailsComponent } from './market/product-details/product-details.component';
import { CartComponent } from './market/cart/cart.component';
import { LoginComponent } from './authentication/login/login.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { FavouriteComponent } from './market/favourite/favourite.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'market', component: MarketComponent
  },
  {
    path: 'market/:id', component: ProductDetailsComponent
  },
  {
    path: 'cart', component: CartComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'signup', component: SignupComponent
  },
  {
    path: 'favourite', component: FavouriteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
