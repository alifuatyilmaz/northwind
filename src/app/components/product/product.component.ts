import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[] = []; //Oluşturduğumuz models klasörünün içinde product.ts'de veri tiplerimiz var.product.ts içinde Product nesnesi oluşturuldu.
  dataLoaded = false; // Data yüklenmeye başladığında false olacak.
  filterText="";

  constructor(private productService:ProductService, private activatedRoute:ActivatedRoute, private toastrService:ToastrService, private cartService:CartService) { } //Service kullanmak için ve Parametreyi okumak için. 
  //Private'daki amaç dışardan ProductComponent'i kullanmak isteyen birisi ProductComponent'in örneğini oluşturduktan sonra httpClient'ta gelir. Private dersen sadece bu class'ta çalışır.

  ngOnInit(): void { // Bu sayfada yapılacak en son kodlama
    //this.getProducts();  Fonksiyonumuzu çağırmak için. Bundan sonra app.module.ts'ye gidip HttpClientModule tanımlaması yapman gerekiyor.
      this.activatedRoute.params.subscribe(params=>{
        if(params["categoryId"]){
          this.getProductsByCategory(params["categoryId"])
        }else{
          this.getProducts()
        }
      })
  }

  getProducts() { //Api'den verilerimizi çekmek için
    this.productService.getProducts().subscribe(response=>{
      this.products = response.data
      this.dataLoaded = true; // Data yüklendiğinde true olacak.
    })
    }; 

  getProductsByCategory(categoryId:number) { //Api'den verilerimizi çekmek için
    this.productService.getProductsByCategory(categoryId).subscribe(response=>{
      this.products = response.data
      this.dataLoaded = true; // Data yüklendiğinde true olacak.
    })
    }; 
  
  addToCart(product:Product){
    if(product.unitsInStock===0){
      this.toastrService.error("Hata","Yeterli stok yok sepete eklenemedi")
    }else{
      this.toastrService.success("Sepete eklendi", product.productName)
      this.cartService.addToCart(product);
    }
    
  }
  }