import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail.component';
import { RouterModule } from '@angular/router';
import {routes} from "@app/feature/table/table.routes";
import {FormsModule} from "@angular/forms";
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from "primeng/button";


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
    ButtonModule
  ]
})
export class DetailModule { }
