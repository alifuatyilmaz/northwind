import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' // Api'den verilerimizi çekmek için import et.
/*import { ProductResponseModel } from 'src/app/models/productResponseModel'; productResponseModel sildik o yüzden gerek yok*/ 
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl = "https://localhost:44314/api/" // Verileri çekeceğimiz url .Ortak bir url.
  constructor(private httpClient: HttpClient) { } // product.component içindeki constructordan kesip yapıştırdık.Bir component httpClient kullanmaz. app.module.ts'de tanımla

  getProducts():Observable<ListResponseModel<Product>> { //Api'den verilerimizi çekmek için. Observable product.component'teki subscribe'ı kullanmamızı sağlıyor.Subscribe ile en son ne yapılacak onu belirliyoruz.
    let newPath = this.apiUrl + "products/getall"; // Url'nin devamına ekleyecek.
    return this.httpClient.get<ListResponseModel<Product>>(newPath) // Burada da ProductResponseModel yerine ListResponseModel<Product> yazıyoruz.
    }; 
    // this en üstteki class'a karşılık gelir. Fonksiyon içinde tanımlansaydı this'e gerek yok. Class'tan çekiyoruz.
    // httpClient ile apiUrl'e istek yapıyoruz.
    // this.apiUrl'den gelen datayı ProductResponseModel'e mapla(Gelen data ProductResponseModel tipinde olsun).
  getProductsByCategory(categoryId:number):Observable<ListResponseModel<Product>> { //Api'den verilerimizi çekmek için. Observable product.component'teki subscribe'ı kullanmamızı sağlıyor.Subscribe ile en son ne yapılacak onu belirliyoruz.
    let newPath = this.apiUrl + "products/getbycategory?categoryId="+categoryId; // Url'nin devamına ekleyecek.
    return this.httpClient.get<ListResponseModel<Product>>(newPath) // Burada da ProductResponseModel yerine ListResponseModel<Product> yazıyoruz.
    }; 
    /*
    getProducts() { //Api'den verilerimizi çekmek için. Bu kısım product.component'te vardı.Buraya kopyalandı.
    this.httpClient.get<ProductResponseModel>(this.apiUrl).subscribe((response) => {
        this.products = response.data
    }); 
    Bu kodu her yerde yazma ihtimalimiz olduğu için service dediğimiz bir mekanizmanın içine koyuyoruz.Bunun için bir services klasörü oluşturuyoruz.
    */

    add(product:Product):Observable<ResponseModel>{
      return this.httpClient.post<ResponseModel>(this.apiUrl+"products/add",product) // Hangi adrese ne göndereyim onu belirliyoruz.
    }
}
