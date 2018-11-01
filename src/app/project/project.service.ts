import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  test = {
    founder: '約瑞柯文哲',
    email: 'google@.gmail.com',
    startAt: '2018-10-24',
    endAt: '2018-11-24',
    name: '票投姚文智，電狼3-4',
    targetPrice: '7777777',
    brief: 'QQPRQQPR',
    description: '980980980980980980',
    feedbackPirce: '87',
    feedbackDescription: 'qwertyuiop',
    feedbackAt: '2187-01-01',
    relativeWeb: 'google.com'
  };
  category = [
    'music',
    'photograph',
    'publication',
    'art',
    'design',
    'food',
    'modern',
    'education',
    'technology',
    'social',
    'act',
    'games',
    'placemaking',
    'movies',
    'comics'
  ];
  constructor() {}
  set() {}
  get() {
    return this.test;
  }
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
