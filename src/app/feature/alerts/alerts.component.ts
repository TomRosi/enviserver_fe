import { Component, OnInit } from '@angular/core';
import { AlertsService} from "@app/feature/alerts/services/alerts.service";
import {TableDataInterface} from "@app/feature/table/interfaces/table-data.interface";
import {tap} from "rxjs/operators";

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements OnInit {

  tableData: TableDataInterface = new TableDataInterface();
  temperatureHighValue = {'color': 'white', 'background-color': 'red'};
  temperatureLowValue = {'color': 'white', 'background-color': 'blue'};
  cols = [
    // {field: 'id', header:  'ID'},
    // {field: 'createdOn', header:  'Created on'},
    // {field: 'sensorUUID', header:  'UUID', width: '25%'},
    {field: 'name', header:  'Name', width: '25%'},
    {field: 'highTemperature', header:  'High Temperature', width: '15%'},
    {field: 'lowTemperature', header:  'Low Temperature', width: '15%'},
    {field: 'modifiedOn', header:  'Modified on', width: '24%'},
    {field: 'temperature', header:  'Temperature', width: '15%', useStyle: true}
  ];

  constructor(
    private service: AlertsService,
  ) {
    this.tableData.cols = this.cols;
  }

  ngOnInit() {
    this.tableData.cols = this.cols;
    this.tableData.data$ = this.service.getAlerts().pipe(
      tap(data => {
        return data.map(rowValue => {
          rowValue.temperatureStyle = rowValue.temperature > rowValue.highTemperature ? this.temperatureHighValue : this.temperatureLowValue;
          return rowValue;
        });
      })
    )
  }
}
