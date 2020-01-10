import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {AlertsInterface} from "@app/feature/alerts/alerts.interface";
import {StateManagementService} from "@app/core/state-management.service";

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor(
    private stateManagementService: StateManagementService,
  ) { }

  getAlerts(): Observable<AlertsInterface[]> {
    return this.stateManagementService.filteredData;
  }
}
