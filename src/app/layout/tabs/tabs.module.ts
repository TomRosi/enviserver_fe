import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs.component';
import {TabViewModule} from "primeng/tabview";
import {MeasurementsModule} from "@app/feature/measurements/measurements.module";
import {RouterModule} from "@angular/router";
import {routes} from "@app/layout/tabs/tabs.routes";
import {AlertsModule} from "@app/feature/alerts/alerts.module";
import {SensorsModule} from "@app/feature/sensors/sensors.module";



@NgModule({
  declarations: [TabsComponent],
  imports: [
    CommonModule,
    TabViewModule,
    MeasurementsModule,
    AlertsModule,
    SensorsModule,
    RouterModule.forChild(routes)
  ]
})
export class TabsModule { }
