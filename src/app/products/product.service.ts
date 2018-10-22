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
  startAt: Date;
  endAt: Date;
  name = '';
  targetPrice: number;
  brief = '';
  image;
  description = '';
  feedbackPirce: number;
  feedbackDescription = '';
  feedbackAt: Date;
  relativeWeb = '';
}
