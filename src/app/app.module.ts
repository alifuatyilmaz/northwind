import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';// Http istekleri yapmabilmemiz için
import { FormsModule,ReactiveFormsModule } from '@angular/forms'; //ngModel'i kullanabilmek ve Reactive Forms'ı kullanabilmek için 
import { BrowserAnimationsModule} from '@angular/platform-browser/animations' // Toastr'ı ekledikten sonra bunu unutma

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './components/category/category.component';
import { NaviComponent } from './components/navi/navi.component';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';

import { ToastrModule } from 'ngx-toastr';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { ProductAddComponent } from './components/product-add/product-add.component'; 

@NgModule({
  declarations: [ // Bizim proje içinde oluşturduklarımızı buraya ekliyor.
    AppComponent,
    ProductComponent,
    CategoryComponent,
    NaviComponent,
    VatAddedPipe,
    FilterPipePipe,
    CartSummaryComponent,
    ProductAddComponent
  ],
  imports: [ // Dışardan ekleyeceğimiz modülleri buraya ekliyoruz.
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, //ngModel'i kullanabilmek için bunu unutma
    ReactiveFormsModule, // ReactiveForms kullanabilmek için FormsModule ile 
    BrowserAnimationsModule,
    ToastrModule.forRoot({// Bu projemiz için kullanılabilr hale getir.Pipe için
      positionClass:"toast-bottom-right" // Ekranın neresinde çıksın. Bunu incele örnekleri çok
    }
    ) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
