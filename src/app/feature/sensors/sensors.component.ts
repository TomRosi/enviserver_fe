import { Component, OnInit } from '@angular/core';
import {TableDataInterface} from "@app/feature/table/table-data.interface";
import {SensorsService} from "@app/feature/sensors/sensors.service";

@Component({
  selector: 'app-sensors',
  templateUrl: './sensors.component.html',
  styleUrls: ['./sensors.component.scss']
})
export class SensorsComponent implements OnInit {

  tableData: TableDataInterface = new TableDataInterface();
  cols: {field: string, header: string, width: string}[] = [
    {field: 'name', header:  'Name', width: '20%'},
    {field: 'location', header:  'Location', width: '20%'},
    {field: 'sensorUUID', header:  'UUID', width: '24%'},
    {field: 'minTemperature', header:  'Min Temperature', width: '15%'},
    {field: 'maxTemperature', header:  'Max Temperature', width: '15%'}
  ];

  constructor(
    private service: SensorsService,
  ) {}

  ngOnInit() {
    this.tableData.cols = this.cols;
    this.tableData.data$ = this.service.getSensors();
  }
}
