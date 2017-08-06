import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
 
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './auth/login/login.component';
import { PasswordResetComponent } from './auth/password-reset/password-reset.component';
import { ForgetPasswordComponent } from './auth/forget-password/forget-password.component';
 
const appRoutes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'login',component: LoginComponent,data: { type: 'login' } },
  { path: 'register',component: LoginComponent,data: { type: 'register' } },
  { path: 'forget-password',component: ForgetPasswordComponent },
  { path: 'password-reset',component: PasswordResetComponent },
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: ProfileComponent }
];
 
@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}