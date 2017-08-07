import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { Router } from '@angular/router';
import 'rxjs/add/operator/do';
import { HttpInterceptorService, getHttpHeadersOrInit } from 'ng-http-interceptor';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthInterceptor {

  private userCookie: { 'refresher': '', 'token': '' };

  constructor(private router: Router, private cookie: CookieService, private httpInterceptor: HttpInterceptorService) { }

  triggerInterceptor(): void {
    this.httpInterceptor.request().addInterceptor((data, method) => {
      const headers = getHttpHeadersOrInit(data, method);
      headers.delete("Authorization");
      
      if (headers.get("no_auth") && headers.get("no_auth").toString() == 'true') {
            headers.delete("no_auth");
            return data;
      }

      let cookie = this.cookie.get(environment.tokenCookieName);
      if (cookie != null) {
        headers.set('Authorization', 'Bearer ' + cookie);
        return data;
      }
      this.router.navigate(['/login']);
      return null;
    });

    this.httpInterceptor.response().addInterceptor((res, method) => {
      return res;
    });
  }
}