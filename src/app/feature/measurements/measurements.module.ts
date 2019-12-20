import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MeasurementsComponent} from "@app/feature/measurements/measurements.component";
import {TableModule} from "@app/feature/table/table.module";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    MeasurementsComponent
  ],
  exports: [
    MeasurementsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    TableModule
  ]
})
export class MeasurementsModule { }
