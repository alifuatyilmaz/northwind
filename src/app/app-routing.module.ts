import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  {path:"",pathMatch:"full", component:ProductComponent}, // router-outlet içinde çağırılacak component'i belirliyoruz.Hiç bir şey yazmazsak ProductComponent çağırılacak.
  {path:"products", component:ProductComponent}, // adres çubuğunda yazacağımız yola göre bize göstereceği component'i belirliyoruz(http://localhost:4200/products).
  {path:"products/category/:categoryId", component:ProductComponent} // Seçtiğimi kategoriye göre listelemek için.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
