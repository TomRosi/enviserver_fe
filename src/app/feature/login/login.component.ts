import { Component, OnInit } from '@angular/core';
import {UserInterface} from "@app/shared/_interfaces/user.interface";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: UserInterface = {username: '', password: ''} as UserInterface;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {

  }
}
