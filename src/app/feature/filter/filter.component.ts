import { Component, OnInit } from '@angular/core';
import {tap} from "rxjs/operators";
import {FilterService} from "@app/feature/filter/filter.service";
import {SensorsInterface} from "@app/feature/sensors/sensorsInterface";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  uuidOptions: {label: string, value: any}[] = [
    {label:'None', value: null},
  ];

  temperatureRangeValues: number[] = [-70, 70];
  now = new Date();

  startDateTime = new Date(new Date().setDate(this.now.getDate()-7));
  startDateTimeInput: boolean = false;
  endDateTime = this.now;
  endDateTimeInput: boolean = false;
  selectAllUuid: [] = [];

  constructor(
    private service: FilterService
  ) {  }

  ngOnInit() {
    this.service.getSensors().pipe(tap((res: SensorsInterface[]) => {
      res.forEach(sensor => {
        this.uuidOptions.push({label: sensor.name, value: sensor.uuid});
      })
    })).subscribe();
  }

  reset() {
    // TODO: reset to init values
  }

  setStartDateTimeValues(dateTime: string) {
    this.startDateTime = new Date(dateTime);
  }

  setEndDateTimeValues(dateTime: string) {
    this.endDateTime = new Date(dateTime);
  }
}

export interface DateTimeInputPack {
  label: string;
  date: Date;
  showHeader: boolean;
}
