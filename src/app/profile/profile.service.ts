import { Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

import { environment } from '../../environments/environment';

@Injectable()
export class ProfileService {

  private profileUrl = environment.apiUrl + 'user/profile/get';
  private profileUpdateUrl = environment.apiUrl + 'user/profile/edit';
  
  private profile = [];

  constructor(private http: Http) { }
      
      private get profileDetails(): any[] {
          return Object.assign([], this.profile);
      }

      GetProfileDetails(): Promise<any[]> {
        if (Object.keys(this.profile).length == 0) {
            return this.http.get(this.profileUrl)
                .toPromise()
                .then(response => {
                    this.profile = response.json();
                    return this.profileDetails;
                })
                .catch();
        } else {
            return Promise.resolve(this.profileDetails)
        }
    }

    updateProfile(profileData): Promise<any[]> {

        let formdata = new FormData();
        if(profileData.profile_pic==undefined)
        {
            formdata.append('name',profileData.name);
            formdata.append('email',profileData.email);
            formdata.append('phone',profileData.phone);
        }else{
            formdata.append('profile_pic',profileData.profile_pic);            
        }

        return this.http.put(this.profileUpdateUrl, formdata)
      .toPromise()
      .then(response => {
          return response.json();
      })
      .catch();
    }

    
}