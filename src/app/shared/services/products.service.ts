import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: Observable<any[]>;
  constructor(db: AngularFireDatabase) {
    this.products = db.list('/').valueChanges();
  }
}
