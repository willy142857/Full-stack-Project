import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Member } from './member';
import { Router } from '@angular/router';
import { Project } from '../project/project';
@Injectable({
  providedIn: 'root'
})
export class MemberService {
  member = {
    name: 'Howard',
    mail: 'howard0303@gmail.com',
    phone: '0912345678',
    password: 'abcd1234',
    address: '五柳樹旁',
    sex: '男',
    birth: '0365-02-11',
    introduction:
      '先生不知何許人也，亦不詳其姓字。宅邊有五柳樹，因以為號焉閑靜少言，不慕榮利。好讀書，不求甚解，每有會意，\
      便欣然忘食。性嗜酒，家貧，不能常得。親舊知其如此，或置酒而招之。造飲輒盡，期在必醉，既醉而退，曾不吝情去留。\
      環堵蕭然，不蔽風日；短褐穿結，簞瓢屢空。——晏如也。常著文章自娛，頗示己志。忘懷得失，以此自終。\
      贊曰：黔婁之妻有言：「不戚戚於貧賤，不汲汲於富貴。」極其言，茲若人儔乎？酣觴賦詩，以樂其志。無懷氏之民歟！葛天氏之民歟！'
  };

  constructor(private router: Router, private httpClient: HttpClient) {}

  updateProfile(user: Member) {
    this.httpClient
      .put(`${environment.api}/profile`, user).subscribe(
        (data: Member) => {
          console.log(data);
          alert('修正成功');
        },
        response => {
          if (response.status === 401) {
            alert('請先登入');
            this.router.navigate(['/login']);
          }
        }
      );
  }

  getRaisedProjects() {
    return this.httpClient.get(`${environment.api}/profile/raisingProjects`);
  }

  addFollowing(project: Project) {}

  addbacking(project: Project) {}

}
