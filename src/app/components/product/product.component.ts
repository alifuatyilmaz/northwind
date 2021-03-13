import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[] = []; //Oluşturduğumuz models klasörünün içinde product.ts'de veri tiplerimiz var.product.ts içinde Product nesnesi oluşturuldu.
  dataLoaded = false; // Data yüklenmeye başladığında false olacak.


  constructor(private productService:ProductService) { } //Service kullanmak için. 
  //Private'daki amaç dışardan ProductComponent'i kullanmak isteyen birisi ProductComponent'in örneğini oluşturduktan sonra httpClient'ta gelir. Private dersen sadece bu class'ta çalışır.

  ngOnInit(): void { // Bu sayfada yapılacak en son kodlama
    this.getProducts(); // Fonksiyonumuzu çağırmak için. Bundan sonra app.module.ts'ye gidip HttpClientModule tanımlaması yapman gerekiyor.
  }

  getProducts() { //Api'den verilerimizi çekmek için
    this.productService.getProducts().subscribe(response=>{
      this.products = response.data
      this.dataLoaded = true; // Data yüklendiğinde true olacak.
    })
    }; 
  }