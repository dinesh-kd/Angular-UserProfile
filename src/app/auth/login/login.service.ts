import { Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import 'rxjs/add/operator/toPromise';

import { environment } from '../../../environments/environment';
import { LoginModel } from './login.model';

@Injectable()
export class LoginService {

  private loginUrl = environment.apiUrl + 'user/login';
  private registerUrl = environment.apiUrl + 'user/register';

  constructor(private http: Http, private cookie:CookieService) { }

  login(loginData: LoginModel): Promise<any> {
    return this.http.post(this.loginUrl, loginData)
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
    return this.http.post(this.registerUrl, registerData)
      .toPromise()
      .then(response => {
        return response.json();
      })
      .catch();
  }

}