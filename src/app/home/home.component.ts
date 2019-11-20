import { Component, OnInit } from '@angular/core';
import {isNumeric} from 'tslint';
import {RegisterServiceService} from '../Services/register-service.service';
import {Postreference} from '../../Postreference';
import {LoginServiceService} from '../Services/login-service.service';
import {Router} from '@angular/router';
import {homedir} from 'os';
import {InteractionServiceService} from '../Services/interaction-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  posts: Postreference[];
  editClicked = false;
  negateedit = true;
  constructor(private httpClientService: RegisterServiceService,
              private loginservice: LoginServiceService, private router: Router,
              private interact: InteractionServiceService) { }

  ngOnInit() {
    this.httpClientService.getAll().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }
  handleSuccessfulResponse(response) {
    this.posts = response;
  }

  edit() {
    this.editClicked = true;
    this.negateedit = false;
  }
  getMyPosts() {
    this.httpClientService.getMyPosts(sessionStorage.getItem('username')).subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }

  fun(s: string, m: string) {
    if (s === 'public' || m === sessionStorage.getItem('username')) { return true; } else { return false; }
  }

  clickMethod() {
    if ( confirm('Are you sure to delete ')) {
      console.log('Implement delete functionality here');
    }
  }

  toEdit(mail: string, post: Postreference) {
    if (mail === sessionStorage.getItem('username')) {
      this.submitDetails(post);
      this.router.navigate(['/editPost']);
    } else {
     alert('You are not allowed to edit this blog!');
    }
  }

  toDelete(author: string, postId: number) {
    if (author === sessionStorage.getItem('username')) {
      if ( confirm('Are you sure to delete ')) {
        this.httpClientService.deleteById(postId).subscribe(
          data =>
            alert('Post has been removed !')
        );
        window.location.reload();
      } else {}
    } else {
      alert('You are not allowed to delete this blog!');
    }
  }

  submitDetails(post: Postreference) {
    this.interact.setSubmit(post);
  }
  //  NAVBAR METHODS

  logOut() {
    if ( confirm('Are you sure to logout')) {
      this.loginservice.logOut();
      window.location.reload();
      this.router.navigate(['/home']);
    }
  }
  isLogged() {
    if (sessionStorage.getItem('username') == null) {
      return false;
    } else {
      return true;
    }
  }
  isNotLogged() {
    return !(this.isLogged());
  }
}
