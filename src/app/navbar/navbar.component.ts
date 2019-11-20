import { Component, OnInit } from '@angular/core';
import {LoginServiceService} from '../Services/login-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private loginservice: LoginServiceService, private router: Router) { }

  ngOnInit() {
  }

  logOut() {
    this.loginservice.logOut();
    this.router.navigate(['/home']);
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
