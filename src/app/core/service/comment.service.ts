import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private router: Router, private httpClient: HttpClient) { }

  createComment(comment: any) {
    console.log(comment);
    this.httpClient.post(`${environment.api}/comment`, comment).subscribe(
      (data: any) => {
        console.log(data);
        if (data.success) {
          this.router.navigate([`/commodity/${comment.project_id}`]);
        } else {
          alert('fail');
        }
      },
      response => {
        alert(response.error.message);
      }
    );
  }
}
