import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories : Category[]=[];
  currentCategory : Category; // Seçtiğimiz kategoriyi tutacak.tsconfig.json'a bak.
  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() { //Api'den verilerimizi çekmek için
    this.categoryService.getProducts().subscribe(response=>{
      this.categories = response.data
      })
  }; 

  setCurrentCategory(category:Category){ // category.component.html'de sseçtiğimiz kategoriye göre ürünleri getirecek fonksiyon
    this.currentCategory = category;
  }

  getCurrentCategoryClass(category:Category){ //Seçtiğimiz kategorinin css'i değiştirmek için.Tüm kategorileri kontrol edecek. Eğer seçtiğimiz kategori currentCategory'e eşitse o zaman css'i değiştirecek.
    // getCurrentCategoryClass'ı html'de [class] ile çağırıyoruz.
    if(category == this.currentCategory){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }
}
