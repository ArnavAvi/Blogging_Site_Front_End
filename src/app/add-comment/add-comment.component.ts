import { Component, OnInit } from '@angular/core';
import {Postreference} from '../../Postreference';
import {Commentreference} from '../../Commentreference';
import {RegisterServiceService} from '../Services/register-service.service';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss']
})
export class AddCommentComponent implements OnInit {
  // tslint:disable-next-line:new-parens
  private commentDetail: Commentreference = new class implements Commentreference {
    commentId = null;
    PostId = null;
    poster = null;
    comment = '';
    commentDate = null;
  };
  constructor(private register: RegisterServiceService) { }

  ngOnInit() {
  }

  addComment() {
    this.register.addComment(this.commentDetail);
  }
}
