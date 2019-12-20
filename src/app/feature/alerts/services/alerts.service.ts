import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {MASTER_UUID} from "@app/constants/app.constants";
import {Observable} from "rxjs";
import {AlertsInterface} from "@app/feature/alerts/interfaces/alerts.interface";

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor(
    private http: HttpClient
  ) { }

  getAlerts(): Observable<AlertsInterface[]> {
    return this.http.get<AlertsInterface[]>('/enviserver/alerts', {
      headers: new HttpHeaders().set("UUID", MASTER_UUID)
    });
  }
}
