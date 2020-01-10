import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FluidModule } from '@app/layout/fluid/fluid.module';
import {BaseModule} from "@app/layout/base/base.module";
import {AuthGuard} from "@app/core/auth.guard";
import {CoreAuth} from "@app/core/core.auth";
import {CookieService} from "ngx-cookie-service";
import {StateManagementService} from "@app/core/state-management.service";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FluidModule,
    BaseModule,
  ],
  providers: [
    CookieService,
    CoreAuth,
    AuthGuard,
    StateManagementService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
