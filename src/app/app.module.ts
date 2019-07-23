import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireAuthModule } from '@angular/fire/auth';
// ------------------Angular Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';

// ------------------- Components
import { AppComponent } from './app.component';
import { HomeComponent } from './shared/home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MarketComponent } from './market/market/market.component';
import { ProductDetailsComponent } from './market/product-details/product-details.component';
import { CartComponent } from './market/cart/cart.component';
import { LoginComponent } from './authentication/login/login.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { FavouriteComponent } from './market/favourite/favourite.component';
import { OrderComponent } from './market/order/order.component';
// Import Angular Material 
import {
  MatCheckboxModule,
  MatDialogModule,
  MatSliderModule,
  MatSidenavModule,
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatInputModule,
  MatNativeDateModule,
  MatStepperModule,
  MatToolbarModule,
  MatExpansionModule,
  MatOptionModule,
} from '@angular/material';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';
import { OwlModule } from 'ngx-owl-carousel';
import { Ng5SliderModule } from 'ng5-slider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
// Pipe
import { SearchPipe } from './shared/services/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    MarketComponent,
    ProductDetailsComponent,
    CartComponent,
    LoginComponent,
    SignupComponent,
    FavouriteComponent,
    OrderComponent,
    SearchPipe
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    MatDialogModule,
    NgxPaginationModule,
    AngularFireAuthModule,
    OwlModule,
    NgbModule,
    Ng5SliderModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatOptionModule,
    BrowserModule,
    MatFormFieldModule,
    MatRadioModule,
    MatDatepickerModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatStepperModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    HttpClientModule,
    NgbModule,
  ],
  exports: [
    MatCheckboxModule,
    MatDialogModule,
    MatSliderModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbDropdownModule,
    MatCheckboxModule
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent],
  entryComponents: [OrderComponent]
})
export class AppModule { }
