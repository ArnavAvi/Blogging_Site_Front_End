import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UserDetails} from '../../../UserDetails';
import {PostRef} from '../../../postRef';
import {PostRef2} from '../../postRef2';
import {Postreference} from '../../Postreference';
import {Commentreference} from '../../Commentreference';

@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {

  private url = 'http://localhost:8082/api';
  constructor(private http: HttpClient) { }

  // REGISTER USER
  registerUser(userDetail: UserDetails) {
    console.log(this.url + '/auth/signup');
    console.log('header ~> {' + userDetail.userName + ';' + userDetail.email + ';'
      + userDetail.password + ';' + userDetail.role + ';' + userDetail.userId + '}');
    return this.http.post<UserDetails>('http://localhost:8082/api/auth/signup', userDetail);
  }

  // ADDING POST AFTER LOGIN
  addPost(post: Postreference) {
    console.log('regServ.addPost called ' + post.security);
    // const headers = new HttpHeaders( {Authorization: sessionStorage.getItem('basicAuth')});
    return this.http.post<PostRef2>(this.url + '/post/addPost', post);
  }

  // EDITING POST
  editPost(post: Postreference) {
    console.log('regServ.addPost called ' + post.security);
    const headers = new HttpHeaders( {Authorization: sessionStorage.getItem('basicAuth')});
    return this.http.post<PostRef2>(this.url + '/post/editPost', post, {headers});
  }

  deleteById(id: number) {
    const headers = new HttpHeaders( {Authorization: sessionStorage.getItem('basicAuth')});
    return this.http.delete(this.url + '/post/deletePost/' + id, {headers});
  }
  getAll() {
    return this.http.get<Postreference[]>('http://localhost:8082/api/post/all');
  }
  getMyPosts(email: string) {
    return this.http.get<Postreference[]>('http://localhost:8082/api/post/filterByUser/' + email);
  }

  // GETTING ALL USERS
  getUsers() {
    return this.http.get<UserDetails[]>('http://localhost:8082/api/auth/all');
  }
  // COMMENT SECTION
  addComment(comment: Commentreference) {
    return this.http.post('http://localhost:8082/api/comment/addComment', comment);
  }
}
