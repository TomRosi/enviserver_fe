import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {SensorsInterface} from "@app/feature/sensors/sensorsInterface";
import {StateManagementService} from "@app/core/state-management.service";

@Injectable({
  providedIn: 'root'
})
export class SensorsService {
  constructor(
    private stateManagementService: StateManagementService,
  ) { }

  getSensors(): Observable<SensorsInterface[]> {
    return this.stateManagementService.filteredData;
  }
}
