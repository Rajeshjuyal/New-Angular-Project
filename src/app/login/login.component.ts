import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username: String;
  password: String;
  constructor() {}

  ngOnInit(): void {}
  LoginUser() {
    if (this.username == 'RAJu' && this.password == 'raju123') {
      console.log('WELCOME');
    }
  }
}
