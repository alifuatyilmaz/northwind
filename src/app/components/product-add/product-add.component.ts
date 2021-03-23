import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,FormControl,Validators} from '@angular/forms'; // FormBuilder:html'deki form ile burdakini yapılandırmamızı sağlıyor.Form oluşturmayı sağlıyor.
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  productAddForm:FormGroup;
  constructor(private formBuilder:FormBuilder, private productService:ProductService, private toastrService:ToastrService) { }
  //Reactive form desteği olması için önce FormsModules import edilmeli ve app.module.ts 'de de import edilmeli 
  ngOnInit(): void {
    this.createProductAddForm();
  }

  createProductAddForm(){ // Burada oluşturacağımız formun özelliklerini belirliyoruz.
    this.productAddForm = this.formBuilder.group({
      productName:["",Validators.required], // İlk parantez default değeri, sonraki o alanların kuralları(özelliği).
      unitPrice:["",Validators.required],
      unitsInStock:["",Validators.required],
      categoryId:["",Validators.required]
    })
  }

  add(){
    if(this.productAddForm.valid){
      let productModel = Object.assign({},this.productAddForm.value)  // value formdaki alanların karşılığını verir.
      // Boş bir obje oluşturuyor. Virgülden sonraki alanları alıp {} içine ekliyor.
      this.productService.add(productModel).subscribe(response=>{
        
          this.toastrService.success(response.message,"Başarılı")
        
      },responseError=>{
        if(responseError.error.Errors.length>0){
          for (let i = 0; i < responseError.error.Errors.length; i++) {
            this.toastrService.error(responseError.error.Errors[i].ErrorMessage,"Doğrulama hatası")
            
          }
          
        }
        
      })// Obversible olduğu için subscribe ekle. Virgülden sonraki kısım başarısız olursa
      
    }else{
      this.toastrService.error("Formumuz eksik","Dikkat")
    }
    
  }

}
