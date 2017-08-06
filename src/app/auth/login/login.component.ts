import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, Data } from '@angular/router';

import { LoginModel } from './login.model';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  pageType:string='';
  loginError:boolean = false;
  loginErrorMsg:string = '';
  formRequest:boolean = false;

  constructor(private activeRoute: ActivatedRoute,private route: Router, private loginService:LoginService) { }

  ngOnInit() {
    this.pageType = this.activeRoute.snapshot.data['type'];
  }

  onSubmit(data:LoginModel):void {
    this.loginError = false;
    this.formRequest = true;
    this.loginErrorMsg = '';

    if(this.pageType==='login')
      this.login(data)
    else
      this.register(data)
  }
  
  login(data:LoginModel): void {
    this.loginService.login(data).then(
      data => {
        this.formRequest = false;
        if(data.success)
        {
          this.route.navigate(['/profile']);
        }else{
          this.loginError = true;
          this.loginErrorMsg = data.message;
        }
      }
    ).catch(
      error => {
        this.formRequest = false;
        this.loginError = true;
        this.loginErrorMsg = 'Invalid email / password !!';
      }
      )
  }

  register(data:LoginModel): void {
    this.loginService.register(data).then(
      data => {
          this.formRequest = false;
          if(data.success)
          {
             this.route.navigate(['/login']);
          }else{
            this.loginError = true;
            this.loginErrorMsg = data.message;
          }
      }
    ).catch(
      error => {
        this.formRequest = false;
        this.loginError = true;
        this.loginErrorMsg = 'Something went wrong !!';
      }
      )
  }
}