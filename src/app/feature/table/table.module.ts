import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { RouterModule } from '@angular/router';
import { TableModule as PrimeNgTableModule} from 'primeng/table';
import {CheckboxModule} from 'primeng/checkbox';
import {routes} from "@app/feature/table/table.routes";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [TableComponent],
  exports: [
    TableComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PrimeNgTableModule,
    CheckboxModule,
    RouterModule.forChild(routes)
  ]
})
export class TableModule { }
