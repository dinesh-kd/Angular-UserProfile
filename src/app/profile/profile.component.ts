import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile:any = ''
  constructor(private profileService:ProfileService) { }

  ngOnInit() {
    this.getProfile();
  }
   

  getProfile():void{
    this.profileService.GetProfileDetails().then(
      data => {
        this.profile = data;
      }
    ).catch(
      error => {
        
      }
      )
  }
}