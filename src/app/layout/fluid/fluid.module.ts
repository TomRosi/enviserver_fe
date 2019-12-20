import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FluidComponent } from '@app/layout/fluid/fluid.component';
import { RouterModule } from '@angular/router';
import { routes } from '@app/feature/login/login.routes';
import {LoginModule} from "@app/feature/login/login.module";

@NgModule({
  declarations: [
    FluidComponent
  ],
  imports: [
    CommonModule,
    LoginModule,
    RouterModule.forChild(routes)
  ]
})
export class FluidModule { }
