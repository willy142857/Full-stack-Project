import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  product = new Product();
  founder = '';
  email = '';
  startDate = Date;
  endDate = Date;
  name = this.product.name;
  targetPrice: number;
  brief = '';
  image;
  description = this.product.description;
  feedbackPirce: number;
  feedbackDescription = '';
  feedbackDate;
  relativeWeb;
  constructor(private p: ProductService) {}

  ngOnInit() {}
  onSubmit(form) {
    console.log(form);
  }
  printData() {
    // console.log(this.name + '\n' + this.price + '\n' + this.description);
  }
}
export class Product {
  name = '';
  price: number;
  description = '';
}
