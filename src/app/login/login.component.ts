import { Component, OnInit } from '@angular/core';
import {LoginServiceService} from '../Services/login-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
checkemail = '';
checkname = '';
checkpassword = '';
invalidLogin = false;
  constructor(private loginservice: LoginServiceService, private router: Router) { }

  ngOnInit() {
  }

  checkLogin() {
    console.log('checking your credentials' + this.checkemail + this.checkpassword);
    this.loginservice.authenticate(this.checkemail, this.checkpassword).subscribe(data => {
      this.router.navigate(['home']);
      alert('Your login is succesfull !');
      this.invalidLogin = false;

    });
    this.invalidLogin = true;
  }

  /*checkLogin() {    LOGIN USING USERNAME NOT EMAIL
    console.log('checking your credentials' + this.checkemail + this.checkpassword);
    this.loginservice.authenticate(this.checkname, this.checkpassword).subscribe(data => {
      this.router.navigate(['home']);
      alert('Your login is succesfull !');
      this.invalidLogin = false;

    });
    this.invalidLogin = true;
  }*/

  temp() {
    console.log(this.checkemail + ':' + this.checkpassword);
    console.log(this.loginservice.printValid());
  }
}
