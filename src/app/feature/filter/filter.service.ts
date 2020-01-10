import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {MASTER_UUID} from "@app/constants/app.constants";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor(
    private http: HttpClient
  ) { }

  callFilter(object: string, params: {key: string, value: string}[]): Observable<any[]> {
    let httpParams: HttpParams = new HttpParams();
    params.forEach(param => {
      httpParams = httpParams.append(param.key, param.value);
    });
    return this.http.get<any[]>('/enviserver/' + object, {
      headers: new HttpHeaders().set("UUID", MASTER_UUID),
      params: httpParams
    });
  }
}
