import { Component, OnInit } from '@angular/core';
import { UserDetails} from '../../../UserDetails';
import {RegisterServiceService} from '../Services/register-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public userName: string;
  public email: string;
  public password: string;
  public role: string;
  public userId: number;

  // tslint:disable-next-line:new-parens
  private userDetails: UserDetails = new class implements UserDetails {
    userId = 99;
    userName = '';
    email = '';
    password = '';
    role = 'user';
  };
  constructor(private register: RegisterServiceService, private router: Router) { }

  ngOnInit() {
  }

  validation() {
    let a = 0;
    let b = 0;
    if (this.userDetails.email.length === 0 || this.userDetails.password.length === 0 || this.userDetails.userName.length === 0) {
      // tslint:disable-next-line:max-line-length
      alert('Kindly Fill complete form !'); } else {
      while (a < this.userDetails.email.length) {
        if (this.userDetails.password.length < 6) {
          alert('Password must be atleast 6 characters long !');
          break;
        }
        if (this.userDetails.email.charAt(a) === '@') {
            b = b + 1;
          }
        if (this.userDetails.email.charAt(a) === '.') {
            b = b + 1;
          }
        a = a + 1;
        }
      }
    if (b === 2) {
      this.fun();
    } else if (b !== 2) {
      alert('Wrong Email Address');
    }
    }
fun() {
    this.register.registerUser(this.userDetails).subscribe( data => {
      alert('Registeration Sucessful !');
      this.router.navigate(['home']);
    });
  }
}
