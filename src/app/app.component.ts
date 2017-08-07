import { Component } from '@angular/core';
import { AuthInterceptor } from './shared/auth.interceptor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
    constructor(private authInterceptor: AuthInterceptor) {
    authInterceptor.triggerInterceptor();   
  }
}
