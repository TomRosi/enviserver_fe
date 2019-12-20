import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TableModule} from "@app/feature/table/table.module";
import {HttpClientModule} from "@angular/common/http";
import {AlertsComponent} from "@app/feature/alerts/alerts.component";
import {RouterModule} from "@angular/router";
import {routes} from "@app/feature/alerts/alerts.routes";



@NgModule({
  declarations: [
    AlertsComponent
  ],
  exports: [
    AlertsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    TableModule,
    RouterModule.forChild(routes),
  ]
})
export class AlertsModule { }
