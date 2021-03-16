import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' // Api'den verilerimizi çekmek için import et.
/*import { CategoryResponseModel } from 'src/app/models/categoryResponseModel'; categoryResponseModel sildik o yüzden gerek yok*/ 
import { Observable } from 'rxjs';
import { Category } from '../models/category';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  apiUrl = "https://localhost:44314/api/categories/getall" // Verileri çekeceğimiz url
  constructor(private httpClient: HttpClient) { } // category.component içindeki constructordan kesip yapıştırdık.Bir component httpClient kullanmaz. app.module.ts'de tanımla

  getProducts():Observable<ListResponseModel<Category>> { //Api'den verilerimizi çekmek için. Observable category.component'teki subscribe'ı kullanmamızı sağlıyor.
    return this.httpClient.get<ListResponseModel<Category>>(this.apiUrl) // Burada da CategoryResponseModel yerine ListResponseModel<Category> yazıyoruz.
    }; 

}
