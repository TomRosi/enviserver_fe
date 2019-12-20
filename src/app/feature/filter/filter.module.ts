import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './filter.component';
import { RouterModule } from "@angular/router";
import { routes } from "@app/feature/filter/filter.routes";
import {InputTextModule} from "primeng/inputtext";
import {CalendarModule} from 'primeng/calendar';
import {CheckboxModule} from 'primeng/checkbox';
import {DropdownModule} from 'primeng/dropdown';
import {ButtonModule} from 'primeng/button';


@NgModule({
  declarations: [
    FilterComponent
  ],
  exports: [
    FilterComponent
  ],
  imports: [
    CommonModule,
    InputTextModule,
    CalendarModule,
    CheckboxModule,
    DropdownModule,
    ButtonModule,
    RouterModule.forChild(routes)
  ]
})
export class FilterModule { }
