import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CartItem } from '../models/cart-item';
import { Product } from '../models/product';
import { cartUrl } from '../config/api';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  getCartItems(): Observable<CartItem[]> {
  // Mapping Piping

  return this.http.get<CartItem[]>(cartUrl).pipe(
        map((result: any[]) => {
          let cartItems: CartItem[] = [];

          for (let item of result) {
            let productExists = false

            for (let i in cartItems) {
              if (cartItems[i].productId === item.product.id) {
                cartItems[i].qty++
                productExists = true
                break;
              }
            }

            if (!productExists) {
              cartItems.push(new CartItem(item.id, item.product));
            }
          }

          return cartItems;
        })
      );
  }

  addProductToCart(product: Product):Observable<any> {
  return this.http.post(cartUrl, { product });
  }
}
