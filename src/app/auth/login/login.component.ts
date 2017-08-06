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
  constructor(private route: ActivatedRoute, private loginService:LoginService) { }

  ngOnInit() {
    this.pageType = this.route.snapshot.data['type'];
  }

  onSubmit(data:LoginModel):void {
    if(this.pageType==='login')
      this.login(data)
    else
      this.register(data)
  }
  
  login(data:LoginModel): void {
    this.loginService.login(data).then(
      data => {
        
      }
    ).catch(
      error => {
        
      }
      )
  }

  register(data:LoginModel): void {
    this.loginService.register(data).then(
      data => {
        
      }
    ).catch(
      error => {
        
      }
      )
  }

}
