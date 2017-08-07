import { Component, OnInit } from '@angular/core';
import { PasswordService } from './forget-password.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  error:boolean = false;
  errorMsg:string = '';
  formRequest:boolean = false;

  constructor(private password:PasswordService) { }

  ngOnInit() {
  }
  
  onSubmit(email):void {
    this.error = false;
    this.formRequest = true;
    this.errorMsg = '';

    this.sendFpMail(email);
  }

  sendFpMail(email) : void{
    this.password.sendFpMail(email).then(
      data => {
          this.formRequest = false;
          this.error = true;

          if(data.success)
          {
              this.errorMsg = 'Verification mail sent !!!';
          }else{
            this.errorMsg = data.message;
          }
      }
    ).catch(
      error => {
        this.formRequest = false;
        this.error = true;
        this.errorMsg = 'Something went wrong !!';
      }
      )
  }

}
