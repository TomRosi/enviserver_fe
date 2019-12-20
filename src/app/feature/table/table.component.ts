import {Component, Input, OnInit} from '@angular/core';
import {TableDataInterface} from "@app/feature/table/interfaces/table-data.interface";
import {SortEvent} from "primeng";

@Component({
  selector: 'app-table-view',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input('tableData') tableData: TableDataInterface | null;

  constructor() { }

  ngOnInit() {}

  sort(event: SortEvent) {
    console.log(event)
  }

}
