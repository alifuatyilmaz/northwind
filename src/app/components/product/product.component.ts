import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductResponseModel } from 'src/app/models/productResponseModel';
import { HttpClient } from '@angular/common/http' // Api'den verilerimizi çekmek için import et.

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  /* Bu kısım örnek data olarak verildi.
  product1 = { productId: 1, productName: 'Bardak', categoryId: 1, unitPrice: 5 , unitsInStock:5} // any veri türü herşey olabilir demektir.
  product2 = { productId: 2, productName: 'Laptop', categoryId: 1, unitPrice: 5 }
  product3 = { productId: 3, productName: 'Mouse', categoryId: 1, unitPrice: 5 }
  product4 = { productId: 4, productName: 'Keyboard', categoryId: 1, unitPrice: 5 }
  product5 = { productId: 5, productName: 'Camera', categoryId: 1, unitPrice: 5 }

  products:Product[]= [this.product1, this.product2, this.product3, this.product4, this.product5] // Virgül ile de yukarıda tanımladıklarmızı yazabiliriz.Oluşturduğumuz models klasörünün içinde product.ts'de veri tiplerimiz var.
  */
  /*Burada gerçek datayla çalışacağız */
  products: Product[] = []; //Oluşturduğumuz models klasörünün içinde product.ts'de veri tiplerimiz var.product.ts içinde Product nesnesi oluşturuldu.
  apiUrl = "https://localhost:44314/api/products/getall" // Verileri çekeceğimiz url

  /* Bu kısıma ihtiyaç kalmıyor. Aşağıda this.product ile tanımlama yaptığımız için.
  productResponseModel:ProductResponseModel={
    data : this.products,
    message : "",
    success : true
  };
  */

  constructor(private httpClient: HttpClient) { } //HttpClient türünde bir nesne istemiş oluyoruz. 
  //Private'daki amaç dışardan ProductComponent'i kullanmak isteyen birisi ProductComponent'in örneğini oluşturduktan sonra httpClient'ta gelir. Private dersen sadece bu class'ta çalışır.

  ngOnInit(): void { // Bu sayfada yapılacak en son kodlama
    this.getProducts(); // Fonksiyonumuzu çağırmak için. Bundan sonra app.module.ts'ye gidip HttpClientModule tanımlaması yapman gerekiyor.
  }

  getProducts() { //Api'den verilerimizi çekmek için
    this.httpClient.get<ProductResponseModel>(this.apiUrl).subscribe((response) => {
        this.products = response.data
    }); 
    // this en üstteki class'a karşılık gelir. Fonksiyon içinde tanımlansaydı this'e gerek yok. Class'tan çekiyoruz.
    // httpClient ile apiUrl'e istek yapıyoruz.
    // this.apiUrl'den gelen datayı ProductResponseModel'e mapla(Gelen data ProductResponseModel tipinde olsun).
    // response gelen yanıt için ne yapmalıyız onu belirliyoruz.
  }
}

// Eğer verilere erişirken CORS policy hatası alıyorsak backend'ciler apiye erişmek için gerekli konfigürasyonu yapmamış oluyorlar.
// Bunun için önceki projede WebAPI içinde Startup.cs 'yi aç.
//services.AddCors(); // Frontend'cilerin erişebilmesi için (Angular projesi) 48.satır
//app.UseCors(builder=>builder.WithOrigins("http://localhost:4200").AllowAnyHeader()); 81.satır // Frontend'cilerin erişebilmesi için (Angular projesi).
// Bu adresten get,post ne gelirse gelsin izin ver demek.
// Birden fazla web sayfan var ise virgül ile ayır.