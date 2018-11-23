import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Project, Category } from './project';
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
    '文藝',
    '生活',
    '娛樂',
    '音樂',
    '攝影',
    '出版',
    '美術',
    '設計',
    '飲食',
    '時尚',
    '教育',
    '科技',
    '社會',
    '表演',
    '遊戲',
    '地方創生',
    '電影動畫',
    '插畫漫畫'
  ];

  constructor(private httpClient: HttpClient) {}
  set() {}
  getProjects() {
    return this.httpClient.get(`${environment.api}/projects/index`);
  }
  getProject(id: number) {
    return this.httpClient.get(`${environment.api}/projects/${id}`);
  }
  createProject(project: Project) {
    // return this.httpClient.post(`${environment.api}/projects`, project);
  }
  editProject(project: Project, id: number) {
    // return this.httpClient.post(`${environment.api}/projects/${id}`,project);
  }

  getCategories() {
    return this.httpClient.get(`${environment.api}/categories`);
  }

  calcLeftDay(project: Project): number {
    const end = new Date(project.ended_at);
    const start = new Date(project.started_at);
    return (end.getTime() - start.getTime()) / 1000 / 60 / 60 / 24;
  }
}
