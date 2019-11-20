import {Routes} from '@angular/router';
// tslint:disable-next-line:import-spacing
import {HomeComponent} from './home/home.component';
import {NavbarComponent} from './navbar/navbar.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {AddPostComponent} from './add-post/add-post.component';
import {EditPostComponent} from './edit-post/edit-post.component';
import {FollowComponent} from './follow/follow.component';
import {ViewProfileComponent} from './view-profile/view-profile.component';
import {AddCommentComponent} from './add-comment/add-comment.component';

export const MAIN_ROUTES: Routes = [    /*custom routes stored as array*/
  {
    path: '',               /*in case of no / in uri this component will redirected to*/
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'addPost', component: AddPostComponent
  },
  {
    path: 'editPost', component: EditPostComponent
  },
  {
    path: 'viewProfile', component: ViewProfileComponent
  },
  {
    path: 'follow', component: FollowComponent
  },
  {
    path: 'addComment', component: AddCommentComponent
  },
  {
    path: '**', redirectTo: 'home'
  }
  ];
