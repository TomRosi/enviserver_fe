import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TableModule} from "@app/feature/table/table.module";
import {HttpClientModule} from "@angular/common/http";
import {SensorsComponent} from "@app/feature/sensors/sensors.component";



@NgModule({
  declarations: [
    SensorsComponent
  ],
  exports: [
    SensorsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    TableModule
  ]
})
export class SensorsModule { }
