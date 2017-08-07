import { Component, OnInit } from '@angular/core'
import { ProfileService } from '../profile/profile.service'
import { LoginService } from '../auth/login/login.service'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  navBarOpenStatus:boolean = false
  profileDetails:any = null;
  profileSb:any;

  constructor(private profileService:ProfileService, private loginService:LoginService) { }
  
  ngOnInit() {
    this.profileSb = this.profileService.profileDataOb.subscribe(
      value => {
        this.profileDetails = value;
      })
  }

  toogleNav():void{
      this.navBarOpenStatus = !this.navBarOpenStatus;
  }

  logout():void{
    this.loginService.logout();
  }

}