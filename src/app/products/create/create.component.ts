import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  model: any = {};
  nowDate = new Date();
  constructor(private product: ProductService) {}
  ngOnInit() {}
  onSubmit(form) {
    this.product.set();
    console.log(form.value);
  }
  printData() {
    // console.log(this.name + '\n' + this.price + '\n' + this.description);
  }
}
