import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {MASTER_UUID} from "@app/constants/app.constants";
import {MeasurementsInterface} from "@app/feature/measurements/measurementsInterface";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MeasurementService {

  constructor(
    private http: HttpClient
  ) { }

  getMeasurements(): Observable<MeasurementsInterface[]> {
    return this.http.get<MeasurementsInterface[]>('/enviserver/measurements', {
      headers: new HttpHeaders().set("UUID", MASTER_UUID)
    });
  }
}
