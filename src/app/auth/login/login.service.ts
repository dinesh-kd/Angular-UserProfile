import { Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import 'rxjs/add/operator/toPromise';
import { Router } from '@angular/router';

import { environment } from '../../../environments/environment';
import { LoginModel } from './login.model';
import { ProfileService } from '../../profile/profile.service';

@Injectable()
export class LoginService {

  private loginUrl = environment.apiUrl + 'user/login';
  private registerUrl = environment.apiUrl + 'user/register';

  constructor(private http: Http, private cookie:CookieService, private route: Router,private profileService:ProfileService) { }

  private get headers(): Headers {
    return new Headers({'no_auth': true })
  };

  login(loginData: LoginModel): Promise<any> {
    return this.http.post(this.loginUrl, loginData, { headers: this.headers })
      .toPromise()
      .then(response => {
          let resp = response.json();
          if(resp.success)
          this.cookie.put(environment.tokenCookieName,resp.token);
          return resp;
      })
      .catch();
  }

  register(registerData: LoginModel): Promise<any> {
    return this.http.post(this.registerUrl, registerData, { headers: this.headers })
      .toPromise()
      .then(response => {
        return response.json();
      })
      .catch();
  }

  logout()
  {
    this.profileService.resetData();
    this.cookie.remove(environment.tokenCookieName);
    this.route.navigate(['/login']);
  }

}