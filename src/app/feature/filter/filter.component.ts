import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  uuidOptions: {label: string, value: any}[] = [
    {label:'None', value:null},
  ];

  temperatureRangeValues: number[] = [-70, 70];
  now = new Date();

  startDateTime = new Date(new Date().setDate(this.now.getDate()-7));
  startDateTimeInput: boolean = false;
  endDateTime = this.now;
  endDateTimeInput: boolean = false;
  selectAllUuid: [] = [];

  constructor() { }

  ngOnInit() {
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
