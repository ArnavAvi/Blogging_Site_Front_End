import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Router} from '@angular/router';
import {RegisterServiceService} from '../Services/register-service.service';
import {UserDetails} from '../../../UserDetails';
import {InteractionServiceService} from '../Services/interaction-service.service';

@Component({
  selector: 'app-follow',
  templateUrl: './follow.component.html',
  styleUrls: ['./follow.component.scss']
})
export class FollowComponent implements OnInit {

  user: UserDetails[];
  constructor(private router: Router, private register: RegisterServiceService,
              private interact: InteractionServiceService) { }

  ngOnInit() {
    this.register.getUsers().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }

  handleSuccessfulResponse(response) {
    this.user = response;
  }

}
