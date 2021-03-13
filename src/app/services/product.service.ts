import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' // Api'den verilerimizi çekmek için import et.
import { ProductResponseModel } from 'src/app/models/productResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl = "https://localhost:44314/api/products/getall" // Verileri çekeceğimiz url
  constructor(private httpClient: HttpClient) { } // product.component içindeki constructordan kesip yapıştırdık.Bir component httpClient kullanmaz.

  getProducts():Observable<ProductResponseModel> { //Api'den verilerimizi çekmek için. Observable product.component'teki subscribe'ı kullanmamızı sağlıyor.
    return this.httpClient.get<ProductResponseModel>(this.apiUrl)
    }; 
    // this en üstteki class'a karşılık gelir. Fonksiyon içinde tanımlansaydı this'e gerek yok. Class'tan çekiyoruz.
    // httpClient ile apiUrl'e istek yapıyoruz.
    // this.apiUrl'den gelen datayı ProductResponseModel'e mapla(Gelen data ProductResponseModel tipinde olsun).

    /*
    getProducts() { //Api'den verilerimizi çekmek için. Bu kısım product.component'te vardı.Buraya kopyalandı.
    this.httpClient.get<ProductResponseModel>(this.apiUrl).subscribe((response) => {
        this.products = response.data
    }); 
    Bu kodu her yerde yazma ihtimalimiz olduğu için service dediğimiz bir mekanizmanın içine koyuyoruz.Bunun için bir services klasörü oluşturuyoruz.
    */
}
