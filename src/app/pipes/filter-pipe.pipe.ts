import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: Product[], filterText: string): Product[] { // Verilerimizin tipi Product dizisi (product.component.ts'ye bak).
    filterText = filterText?filterText.toLocaleLowerCase():"" //filterText varmı önce onu kontrol ediyor varsa toLocaleLowerCase() 'i kullanıyor.Eğer verilmediyse hiçbirşey olmayacak yani "". ":" eğer filterText yoksa devreye giriyor.
    return filterText?value.filter((p:Product)=>p.productName.toLocaleLowerCase().indexOf(filterText)!==-1):value; // filtre şartına uyan elemanları yeni bir diziye atıyor.Şart parantez içindeki; önce tüm elemanları tek tek dolaşıp küçük harfe 
    //çeviriyor. indexOf ile çevirdiklerimiz içinde giirlen filterText'i arıyoruz.
  }

}
