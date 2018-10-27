import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  model: any = {};
  nowDate = new Date();
  constructor(private product: ProductService, private router: Router) {}
  ngOnInit() {}
  onSubmit(form) {
    this.product.set();
    this.router.navigateByUrl('/');
    console.log(form.value);
  }
}
