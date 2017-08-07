import { Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import 'rxjs/add/operator/toPromise';

import { environment } from '../../../environments/environment';

@Injectable()
export class PasswordService {

  private fpUrl = environment.apiUrl + 'user/forgotPassword';

  constructor(private http: Http, private cookie:CookieService) { }

  private get headers(): Headers {
    return new Headers({'no_auth': true })
  };

  sendFpMail(email): Promise<any> {
    return this.http.post(this.fpUrl, email, { headers: this.headers })
      .toPromise()
      .then(response => {
          return response.json();;
      })
      .catch();
  }

}