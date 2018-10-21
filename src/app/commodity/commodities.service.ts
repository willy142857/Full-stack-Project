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
      createdAt: '2018-09-11T19:49:35.917Z',
      updatedAt: '2018-11-11T19:49:35.917Z',
      email: '1234@gmail.com',
      description: 'asdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdf',
      feedback: '500',
      feedback_description: '1.for free \n 2.good \n 3.awesome\n',
      connect: 'http://www.google.com',
    };
}
