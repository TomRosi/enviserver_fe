import { Component, OnInit } from '@angular/core';
import {UserInterface} from "@app/shared/_interfaces/user.interface";
import {CoreAuth} from "@app/core/core.auth";
import {Router} from "@angular/router";
import {delay} from "rxjs/operators";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: UserInterface = {username: '', password: ''} as UserInterface;
  loading: boolean = false;

  constructor(
    private coreAuthService: CoreAuth,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.loading = true;
    this.coreAuthService.login(this.user.username, this.user.password)
      .subscribe(res => {
        if (res === true) {
          console.log("Success login");
          this.loading = false;
          this.router.navigate(["/"]);
        } else {
          // TODO: Dát uživateli vědět, že zadal nesprávné credentials
          console.error("Wrong username or password.");
          this.loading = false;
          this.router.navigate(["/login"]);
        }
      })
  }
}
