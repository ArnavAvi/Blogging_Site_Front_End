import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient, private router: Router) { }

  printValid() {
    return this.http.get('http://localhost:8082/api/auth/all');
  }
  authenticate(username, password): Observable<any> {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    console.log('authenticationService called! for ' + username + password + ' as ' + btoa(username + ':' + password));
    return this.http.get('http://localhost:8082/api/auth/age', {headers}).pipe(
      map(
        userData => {
          sessionStorage.setItem('username', username);
          const authString = 'Basic ' + btoa(username + ':' + password);
          sessionStorage.setItem('basicAuth', authString);
          return userData;
        }
      )
     );
  }

  isUserLoggedIn() {
    const user = sessionStorage.getItem('username');
    return !(user == null);
  }

  logOut() {
    console.log('authentication.service.ts.logOut() called!');
    // tslint:disable-next-line:triple-equals
    if (this.isUserLoggedIn() == true) {
      sessionStorage.removeItem('username');
      this.router.navigate(['/home']);
    } else if (this.isUserLoggedIn() === false) {
      alert('No User Logged in');
    }
  }

  advLogOut() {
    console.log('authentication.service.ts.logOut() called!');
    // tslint:disable-next-line:triple-equals
    if (this.isUserLoggedIn() == true) {
      alert('Logging you out!');
      sessionStorage.removeItem('username');
      this.router.navigate(['/home']);
    } else if (this.isUserLoggedIn() === false) {
      alert('No User Logged in');
    }
  }
}
