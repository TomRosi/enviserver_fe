import {Component, Input, OnInit} from '@angular/core';
import {TableDataInterface} from "@app/feature/table/table-data.interface";

@Component({
  selector: 'app-table-view',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  @Input('tableData') tableData: TableDataInterface | null;
  display: boolean = false;

  constructor() { }

  ngOnInit() {}

  showDialog() {
    this.display = true;
  }
}
