import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '@app/feature/login/login.component';
import { RouterModule } from '@angular/router';
import { routes } from '@app/feature/login/login.routes';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    InputTextModule,
    PanelModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class LoginModule { }
