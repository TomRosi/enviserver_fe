import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {MASTER_UUID} from "@app/constants/app.constants";
import {Observable} from "rxjs";
import {SensorsInterface} from "@app/feature/sensors/sensorsInterface";

@Injectable({
  providedIn: 'root'
})
export class SensorsService {

  constructor(
    private http: HttpClient
  ) { }

  getSensors(): Observable<SensorsInterface[]> {
    return this.http.get<SensorsInterface[]>('/enviserver/sensors', {
      headers: new HttpHeaders().set("UUID", MASTER_UUID)
    });
  }
}
