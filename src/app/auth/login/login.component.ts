import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, Data } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  pageType:string='';
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.pageType = this.route.snapshot.data['type'];
  }

}
