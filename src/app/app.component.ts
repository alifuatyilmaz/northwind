import { Component } from '@angular/core';

@Component({ // { obje anlamına geliyor.
  selector: 'app-root', // Bunun kullanıldığı yer index.html. <body> tagı içinde bir tag gibi kullanabiliyoruz.
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Bu html'in css'lerini koyduğumuz yer.
})
export class AppComponent {
  title: string = 'northwind'; // Typescript'te veri tipini belirleyebiliriz.
  user: string = 'Ali F.'
  /* Bu kod satırlarını buradan kesip product klasöründe product.component.ts içine yapıştırdık.
  product1: any = { productId: 1, productName: 'Bardak', categoryId: 1, UnitPrice: 5 } // any veri türü herşey olabilir demektir.
  product2: any = { productId: 2, productName: 'Laptop', categoryId: 1, UnitPrice: 5 }
  product3: any = { productId: 3, productName: 'Mouse', categoryId: 1, UnitPrice: 5 }
  product4: any = { productId: 4, productName: 'Keyboard', categoryId: 1, UnitPrice: 5 }
  product5: any = { productId: 5, productName: 'Camera', categoryId: 1, UnitPrice: 5 }

  products = [this.product1, this.product2, this.product3, this.product4, this.product5] // Virgül ile de yukarıda tanımladıklarmızı yazabiliriz.
  */
}

//Datayı yönettiğimiz yer app.component.ts
//Görüntüyü yönettiğimiz yer app.component.html. Bu ikisi kardeş gibi.