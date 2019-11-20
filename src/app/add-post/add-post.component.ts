import { Component, OnInit } from '@angular/core';
import { PostRef } from '../../../postRef';
import {RegisterServiceService} from '../Services/register-service.service';
import {Router} from '@angular/router';
import {PostRef2} from '../../postRef2';
import {Postreference} from '../../Postreference';


@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

  // tslint:disable-next-line:new-parens
  private postdetail: Postreference = new class implements Postreference {
    content = '';
    createdOn = new Date();
    postId = 999;
    security = '';
    title = '';
    author = sessionStorage.getItem('username');
    updatedOn = null;
  };

  constructor(private registandAdd: RegisterServiceService, private router: Router) {
  }

  ngOnInit() {
  }

  fun() {
    alert(this.postdetail.title + '/' + this.postdetail.content + '/' +
      this.postdetail.postId + '/' + this.postdetail.security);
  }

  validateBeforeAdd() {
    if (this.postdetail.security === '') {
      alert('You left post security empty!');
      this.router.navigate(['/addPost']);
    } else if (this.postdetail.title === '') {
      alert('You left title security empty!');
      this.router.navigate(['/addPost']);
    } else { this.addPost(); }
  }

  addPost() {
    alert('Please wait.');
    this.registandAdd.addPost(this.postdetail).subscribe(data => {
      alert('Post Added !');
      console.log(data);
      this.router.navigate(['home']);
    });
  }

}

