import { Component, OnInit } from '@angular/core';
import {RegisterServiceService} from '../Services/register-service.service';
import {Router} from '@angular/router';
import {Postreference} from '../../Postreference';
import {InteractionServiceService} from '../Services/interaction-service.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit {

  // tslint:disable-next-line:new-parens
  private editedPost: Postreference = new class implements Postreference {
    content = '';
    createdOn = new Date();
    postId = 999;
    security = 'private';
    title = '';
    author = sessionStorage.getItem('username');
    updatedOn = null;
  };

  constructor(private registandAdd: RegisterServiceService, private router: Router,
              private interact: InteractionServiceService) {
  }
  ngOnInit() {
    this.editedPost = this.interact.submittedDetails;
    this.pleaseEdit(this.interact.submittedDetails);
      }

      pleaseEdit(post: Postreference) {
       this.editedPost = this.interact.submittedDetails;
  }

  editPost() {
    if ( confirm('Old post wont be retrieved, Are you sure to Update changes ?')) {
    this.registandAdd.editPost(this.editedPost).subscribe(data => {
      this.router.navigate(['home']);
    }); }
  }
  clickMethod() {
    if ( confirm('Are you sure to delete ')) {
      console.log('Implement delete functionality here');
    }
  }
}
