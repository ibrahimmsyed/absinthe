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
        // const headers = new HttpHeaders({
        //     'x-api-user': 'a91af8db-e4d4-42bb-b034-935cdd439670',
        //     'x-api-key':'6c4a887a-d5b9-4a92-b919-74d6dd918e02'
        // });

        /*const headers = new HttpHeaders({
            'Content-Type': 'text/plain',
            'Token':'$1$dfqO.eT9$32ufsPO5q2JKs03UTnsm5.',
            'User-Id':'1'
        });*/
    //return this.http.get('https://habitica.com/api/v3/user', {headers:headers} )
    //return this.http.get('http://localhost/rest/restserver/index.php/api/example/users')
    return this.http.post<any>('http://10.98.20.104/simple-codeigniter-rest-api-master/index.php/auth/login', { username: username, password: password },{headers: new HttpHeaders().set('Content-Type', 'application/json')},)
        .map(user => {
            // login successful if there's a jwt token in the response
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
            }
            return user;

        });
        
  }
  logout() {
      // remove user from local storage to log user out
      localStorage.removeItem('currentUser');
  }
}
