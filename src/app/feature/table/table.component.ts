import {Component, Input, OnInit} from '@angular/core';
import {TableDataInterface} from "@app/feature/table/table-data.interface";
import {SortEvent} from "primeng";
import {StateManagementService} from "@app/core/state-management.service";

@Component({
  selector: 'app-table-view',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input('tableData') tableData: TableDataInterface | null;
  selectedDetailData: any = null;
  showDetailDialog: boolean = false;
  currentTab: string = null;

  constructor() { }

  ngOnInit() {}

  // TODO: Umožnit na BE příjmat sort operace
  // TODO: Implementovat načítání dle filtrů se sortováním
  lazyLoad(event: SortEvent) {
    console.log(event);
  }

  showDetail(row: any) {
    this.selectedDetailData = row;
    this.showDetailDialog = true;
  }

}
