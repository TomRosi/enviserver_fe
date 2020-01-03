import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {Router} from "@angular/router";
import {CoreAuth} from "@app/core/core.auth";

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {

  userMenu: MenuItem[];

  constructor(
    private router: Router,
    private coreAuth: CoreAuth,
  ) { }

  ngOnInit() {
    this.userMenu = [
      {
        label: this.coreAuth.localGetUserInfo().fullName ? this.coreAuth.localGetUserInfo().fullName : 'User',
        items: [{
          label: 'Settings',
          icon: 'pi pi-cog'
        }]
      }
    ];
  }

  logout() {
    this.router.navigate(["/logout"]);
  }

}
