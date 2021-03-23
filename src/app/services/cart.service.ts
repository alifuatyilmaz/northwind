import { Injectable } from '@angular/core';
import { CartItem } from '../models/cartItem';
import { CartItems } from '../models/cartItems';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService { // Bu servisi kullanmak için product.component.ts'de constructor içine private cartService:CartService yaz.

  constructor() { }

  addToCart(product:Product){
    let item = CartItems.find(c=>c.product.productId===product.productId); //find ilgili array i tek tek dolaşıyor(=== eşitliğini kontrol ediyor hem tip hem değer olarak).
    if(item){ // Eğer eklenen eleman sepette var mı, varsa quantity +1 
      item.quantity+=1;
    }else{ // Eğer eklenen eleman yoksa sepete eklenecek.
      let cartItem = new CartItem();
      cartItem.product = product;
      cartItem.quantity =1;
      CartItems.push(cartItem) // CartItems dizisine elemanı ekliyor.
    }
  }

  removeFromCart(product:Product){ 
    let item:CartItem = CartItems.find(c=>product.productId===product.productId);
    CartItems.splice(CartItems.indexOf(item),1);// splice belirli index'ten kaç tane silmemiz gerektiğini belirliyoruz. Önce nerden itibaren kaç tane silecek onu bulmamız gerekiyor. CartItems'ı bulmamız gerekiyor.
  }

  list():CartItem[]{
    return CartItems;
  }

}
