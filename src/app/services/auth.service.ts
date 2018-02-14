import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Http, Headers,Response, Jsonp} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }
  login(username: string, password: string) {
    return this.http.post<any>('http://10.98.20.104/trackR/index.php/auth/login', { empid : username, password: password },{headers: new HttpHeaders().set('Content-Type', 'application/json')},)
        .map(user => {
            // login successful if there's a jwt token in the response
            if (user && user.token_id) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));

            }
            console.log(user);
            return user;

        });
        
  }
  logout() {
      // remove user from local storage to log user out
      localStorage.removeItem('currentUser');
  }
}
