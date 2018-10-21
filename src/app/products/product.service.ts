import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor() {}
  set() {}
  get() {}
}

export class Product {
  founder = '';
  email = '';
  startDate: Date;
  endDate: Date;
  name = '';
  targetPrice: number;
  brief = '';
  image;
  description = '';
  feedbackPirce: number;
  feedbackDescription = '';
  feedbackDate: Date;
  relativeWeb = '';
}
