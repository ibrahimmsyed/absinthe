import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../model/User';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any = {};
  users: User[] = [];
  token:string;
  returnUrl: string;

  constructor(
    private authservice:AuthService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    console.log(this.token);
    // reset login status
    this.authservice.logout();
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login(){
    console.log(this.user);
    //this.authservice.get();
    this.authservice.login(this.user.username, this.user.password)
    .subscribe(
        data => {
          console.log('success');
          console.log(data);
          if(data){
            console.log(data.token);
            this.token = data.token;
          }
            
            this.router.navigate(["/profile"]);
        },
        error => {
          console.log('fail');
            //this.alertService.error(error);
            //this.loading = false;
            
        });
  }
}
