import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail.component';
import { RouterModule } from '@angular/router';
import {routes} from "@app/feature/table/table.routes";
import {FormsModule} from "@angular/forms";
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {CalendarModule} from "primeng/calendar";


@NgModule({
  declarations: [DetailComponent],
  exports: [
    DetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DialogModule,
    RouterModule.forChild(routes),
    ButtonModule,
    InputTextModule,
    CalendarModule
  ]
})
export class DetailModule { }
