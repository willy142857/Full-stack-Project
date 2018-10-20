import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  product = new Product();
  name = this.product.name;
  price = this.product.price;
  description = this.product.description;

  constructor(private p: ProductService) {}

  ngOnInit() {}
  onSubmit(form) {}
  printData() {
    console.log(this.name + '\n' + this.price + '\n' + this.description);
  }
}

export class Product {
  name = '';
  price: number;
  description = '';
}
