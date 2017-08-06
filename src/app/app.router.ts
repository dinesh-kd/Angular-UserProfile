import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
 
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './auth/login/login.component';
import { PasswordResetComponent } from './auth/password-reset/password-reset.component';
import { ForgetPasswordComponent } from './auth/forget-password/forget-password.component';
import { RegisterComponent } from './register/register.component';
 
const appRoutes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'login',component: LoginComponent },
  { path: 'register',component: RegisterComponent },
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