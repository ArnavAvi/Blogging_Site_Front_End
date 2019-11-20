import { Component, OnInit } from '@angular/core';
import {RegisterServiceService} from '../Services/register-service.service';
import {InteractionServiceService} from '../Services/interaction-service.service';
import {UserDetails} from '../../../UserDetails';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.scss']
})
export class ViewProfileComponent implements OnInit {
  user: UserDetails[];
  profile: UserDetails;
  private userMail = sessionStorage.getItem('username');
  onEditClicked = false;
  onEditNotClicked = true;

  constructor(private register: RegisterServiceService, private interact: InteractionServiceService) { }
  ngOnInit() {
    this.register.getUsers().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }

  handleSuccessfulResponse(response) {
    this.user = response;
    let i = 0;
    for (i = 0 ; i < this.user.length ; i++) {
      if ( this.user[i].email === sessionStorage.getItem('username')) {
        this.profile = this.user[i];
        break;
      }
    }
  }

  editProfile() {
    this.onEditClicked = true;
    this.onEditNotClicked = false;
  }
}
