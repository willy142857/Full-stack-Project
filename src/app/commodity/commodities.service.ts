import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommoditiesService {

  constructor() { }
  commodity = {
      name: '口罩',
      applier: 'john',
      budget: 100000,
      brief_intro: '這個商品真的很好.............................................................',
      get: 50000,
      people: 50,
      startAt: '2018-09-11T19:49:35.917Z',
      endAt: '2018-11-11T19:49:35.917Z',
      email: '1234@gmail.com',
      description: 'asdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdf',
      plans: [
        {
          feedback: '500',
          feedback_description: '1.for free \n 2.good \n 3.awesome\n',
          connect: 'http://www.google.com',
        },
        {
          feedback: '600',
          feedback_description: '1.for free \n 2.good \n 3.awesome\n',
          connect: 'http://www.google.com',
        }
      ]
    };

  messages = [
    {
      name: 'John',
      sum_review: 'good product',
      review: 'I use this product as a ......, and it is very practical',
      date: '2018-10-13T19:49:35.917Z'
    },
    {
      name: 'Max',
      sum_review: 'good product',
      review: 'I use this product as a ......, and it is very practical',
      date: '2018-09-20T19:49:35.917Z'
    },
    {
      name: 'Howard',
      sum_review: 'good product',
      review: 'I use this product as a ......, and it is very practical',
      date: '2018-10-17T19:49:35.917Z'
    }
  ];
}
