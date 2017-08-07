import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile:any = ''
  editMode:boolean = false;
  error:boolean = false;
  errorMsg:string = '';
  formRequest:boolean = false;

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

  editProfile(): void{
    this.editMode = !this.editMode;
  }

  onSubmit(profileData):void {
    this.error = false;
    this.formRequest = true;
    this.errorMsg = '';

    this.updateProfile(profileData)
  }

  updateProfile(profileData) : void{
    this.profileService.updateProfile(profileData).then(
      data => {
          this.formRequest = false;
          this.error = true;
          this.errorMsg = 'Updated successfully !!!';
          this.editMode = false;
      }
    ).catch(
      error => {
        this.formRequest = false;
        this.error = true;
        this.errorMsg = 'Something went wrong !!';
      }
      )
  }

  uploadFile($event) {
        const files = $event.target.files || $event.srcElement.files;
        const file = files[0];
        let profileData = {profile_pic:file};
        
        var reader = new FileReader();
        reader.onload = (event:any) => {
           this.profile.profile_pic = event.target.result;
        }
        reader.readAsDataURL(file);
        
        this.onSubmit(profileData);
    }


}