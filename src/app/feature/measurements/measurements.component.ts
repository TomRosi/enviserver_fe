import { Component, OnInit } from '@angular/core';
import {MeasurementService} from "@app/feature/measurements/measurement.service";
import {TableDataInterface} from "@app/feature/table/table-data.interface";

@Component({
  selector: 'app-measurements',
  templateUrl: './measurements.component.html',
  styleUrls: ['./measurements.component.scss']
})
export class MeasurementsComponent implements OnInit {

  tableData: TableDataInterface = new TableDataInterface();
  cols: {field: string, header: string, width: string}[] = [
    // {field: 'id', header:  'ID'},
    // {field: 'createdOn', header:  'Created on'},
    {field: 'name', header:  'Name', width: '28%'},
    {field: 'temperature', header:  'Temperature', width: '20%'},
    {field: 'status', header:  'Status', width: '20%'},
    {field: 'modifiedOn', header:  'Modified on', width: '25%'},
  ];

  constructor(
    private service: MeasurementService,
  ) {}

  ngOnInit() {
    this.tableData.cols = this.cols;
    this.tableData.data$ = this.service.getMeasurements();
  }

}
