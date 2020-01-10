import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail.component';
import { RouterModule } from '@angular/router';
import { TableModule as PrimeNgTableModule} from 'primeng/table';
import {CheckboxModule} from 'primeng/checkbox';
import {routes} from "@app/feature/table/table.routes";
import {FormsModule} from "@angular/forms";
import {DialogModule} from 'primeng/dialog';


@NgModule({
  declarations: [DetailComponent],
  exports: [
    DetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PrimeNgTableModule,
    CheckboxModule,
    DialogModule,
    RouterModule.forChild(routes)
  ]
})
export class DetailModule { }
