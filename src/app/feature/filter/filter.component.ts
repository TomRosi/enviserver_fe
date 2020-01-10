import { Component, OnInit } from '@angular/core';
import {tap} from "rxjs/operators";
import {FilterService} from "@app/feature/filter/filter.service";
import {Router} from "@angular/router";
import {StateManagementService} from "@app/core/state-management.service";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  private defaultValues: {
    temperatureRange: {min: number, max: number},
    startDateTime: Date,
    endDateTime: Date,
    selectedUUID: string,
  } = {
    temperatureRange: {min: -70, max: 70},
    startDateTime: new Date(0),
    endDateTime: new Date(),
    selectedUUID: null,
  };

  private currentTab: string;

  uuidOptions: {label: string, value: any}[] = [
    {label:'Select all', value: null},

    // TODO: Načíst UUID z BE
  ];

  startDateTimeInput: boolean = false;
  endDateTimeInput: boolean = false;
  temperatureRangeValues: number[];
  startDateTime = null;
  selectAllUuid: string = null;
  endDateTime = null;
  highTemperature: number;
  lowTemperature: number;

  constructor(
    private service: FilterService,
    private route: Router,
    private stateManagementService: StateManagementService,
  ) {  }

  ngOnInit() {
    this.stateManagementService.currentTab.subscribe(currentTab => {
      this.currentTab = currentTab;
      this.service.callFilter(this.currentTab, this.getParams()).pipe(tap((res: any[]) => {
        this.stateManagementService.filteredData.emit(res);
      })).subscribe();
    });
  }

  reset() {
    localStorage.removeItem(this.currentTab);
    this.service.callFilter(this.currentTab, this.getParams()).pipe(tap((res: any[]) => {
      this.stateManagementService.filteredData.emit(res);
    })).subscribe();
  }

  submit() {
    localStorage.setItem(this.currentTab, JSON.stringify(this.mapParamsForAPI()).toString());
    this.service.callFilter(this.currentTab, this.getParams()).pipe(tap((res: any[]) => {
      this.stateManagementService.filteredData.emit(res);
    })).subscribe();
  }

  setStartDateTimeValues(dateTime: string) {
    this.startDateTime = new Date(dateTime);
  }

  setEndDateTimeValues(dateTime: string) {
    this.endDateTime = new Date(dateTime);
  }

  private setFilterValues(filterValues: {key: string, value: string}[]) {
    this.temperatureRangeValues = [
      this.hasParamsKey(filterValues,"minTemperature") ? parseInt(this.getParamByKey(filterValues,"minTemperature"), 10) : this.defaultValues.temperatureRange.min,
      this.hasParamsKey(filterValues,"maxTemperature") ? parseInt(this.getParamByKey(filterValues,"maxTemperature"), 10) : this.defaultValues.temperatureRange.max
    ];

    this.startDateTime = this.hasParamsKey(filterValues,"afterTimestamp") ? this.getParamByKey(filterValues,"afterTimestamp") : this.defaultValues.startDateTime;
    this.endDateTime = this.hasParamsKey(filterValues,"beforeTimestamp") ? this.getParamByKey(filterValues,"beforeTimestamp") : this.defaultValues.endDateTime;
    this.selectAllUuid = this.hasParamsKey(filterValues,"sensorUUID") ? this.getParamByKey(filterValues,"sensorUUID") : this.defaultValues.selectedUUID;
  }

  private mapParamsForAPI(): {key: string, value: string}[] {
    let params = [];
    this.temperatureRangeValues[0] !== this.defaultValues.temperatureRange.min ? params.push({key: "minTemperature", value: this.temperatureRangeValues[0].toString()}) : null;
    this.temperatureRangeValues[1] !== this.defaultValues.temperatureRange.max ? params.push({key: "maxTemperature", value: this.temperatureRangeValues[1].toString()}) : null;
    this.selectAllUuid !== this.defaultValues.selectedUUID ? params.push({key: "sensorUUID", value: this.selectAllUuid.toString()}) : null;
    this.startDateTime !== this.defaultValues.startDateTime ? params.push({key: "afterTimestamp", value: this.stringFromDate(this.startDateTime).toString()}) : null;
    // TODO: Na BE nefunguje beforeTimestamp -> opravit !!!
    this.endDateTime !== this.defaultValues.endDateTime ? params.push({key: "beforeTimestamp", value: this.stringFromDate(this.endDateTime).toString()}) : null;
    return params;
  }

  private getParams(): {key: string, value: string}[] {
    if (localStorage.getItem(this.currentTab)) {
      const storedFilterValues = JSON.parse(localStorage.getItem(this.currentTab));
      this.setFilterValues(storedFilterValues);
      return storedFilterValues;
    } else {
      this.setFilterValues([]);
      return this.mapParamsForAPI();
    }
  }

  private getParamByKey(params: {key: string, value: string}[], key: string): string {
    return params.filter(param => {return param.key === key})[0].value;
  }

  private hasParamsKey(params: {key: string, value: string}[], key: string): boolean {
    return params.filter(param => {return param.key === key;}).length > 0;
  }

  private stringFromDate(d) {
    function pad(n){return n<10 ? '0'+n : n}
    return d.getFullYear() + '-'
      + ('0' + (d.getMonth()+1)).slice(-2) + '-'
      + ('0' + d.getDate()).slice(-2) + ' '
      + pad(d.getUTCHours())+':'
      + pad(d.getUTCMinutes())+':'
      + pad(d.getUTCSeconds());
  }
}

export interface DateTimeInputPack {
  label: string;
  date: Date;
  showHeader: boolean;
}
