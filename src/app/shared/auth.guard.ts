import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, CanActivate, CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import 'rxjs/add/operator/do';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private cookie: CookieService) { }

    canActivate(target: any): boolean {
        let userCookie = this.cookie.get(environment.tokenCookieName);
        if (target._routeConfig.path == "login") {
            if (userCookie) {
                this.router.navigate(['/']);
                return false;
            }
            return true;
        }

        if (userCookie) {
            return true;
        }

        this.router.navigate(['/login']);
        return false;
    }
}