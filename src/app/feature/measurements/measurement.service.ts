import { Injectable } from '@angular/core';
import {MeasurementsInterface} from "@app/feature/measurements/measurementsInterface";
import {Observable} from "rxjs";
import {StateManagementService} from "@app/core/state-management.service";

@Injectable({
  providedIn: 'root'
})
export class MeasurementService {

  constructor(
    private stateManagementService: StateManagementService,
  ) { }

  getMeasurements(): Observable<MeasurementsInterface[]> {
    return this.stateManagementService.filteredData;
  }
}
