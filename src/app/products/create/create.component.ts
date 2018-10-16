import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  product = new Product();
  name = this.product.name;
  price = this.product.price;
  description = this.product.description;
  constructor() {}

  ngOnInit() {}
  printData() {
    console.log(this.name + '\n' + this.price + '\n' + this.description);
  }
}
export class Product {
  name = '';
  price: number;
  description = '';
}
