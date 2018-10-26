import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  member = {
    name: 'Howard',
    mail: 'howard0303@gmail.com',
    phone: '0912345678',
    password: 'abcd1234',
    address: '',
    sex: '男',
    birth: Date,
    introduction: Text = ""
  };

  constructor() {}
}
