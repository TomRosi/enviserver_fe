import { Routes } from '@angular/router';
import {TabsComponent} from "@app/layout/tabs/tabs.component";
import {AlertsComponent} from "@app/feature/alerts/alerts.component";
import {MeasurementsComponent} from "@app/feature/measurements/measurements.component";
import {SensorsComponent} from "@app/feature/sensors/sensors.component";

export const routes: Routes = [
  {
    path: 'tabs',
    redirectTo: 'tabs/alerts',
    pathMatch: 'full'
  },
  {
    path: 'tabs',
    component: TabsComponent,
    children: [
      {
        path: 'alerts',
        children: [
          {
            path: '',
            component: AlertsComponent,
            outlet: 'alertsRouterOutlet'
          }
        ]
      },
      {
        path: 'measurements',
        children: [
          {
            path: '',
            component: MeasurementsComponent,
            outlet: 'measurementsRouterOutlet'
          }
        ]
      },
      {
        path: 'sensors',
        children: [
          {
            path: '',
            component: SensorsComponent,
            outlet: 'sensorsRouterOutlet'
          }
        ]
      }
    ]
  }
];
