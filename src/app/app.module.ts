import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import {FormsModule} from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import {HttpClientModule} from '@angular/common/http';
import {RegisterServiceService} from './Services/register-service.service';
import { LoginComponent } from './login/login.component';
import { AddPostComponent } from './add-post/add-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { FollowComponent } from './follow/follow.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { AddCommentComponent } from './add-comment/add-comment.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent,
    AddPostComponent,
    EditPostComponent,
    FollowComponent,
    ViewProfileComponent,
    AddCommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [RegisterServiceService, LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
