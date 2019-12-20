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

  constructor() { }

  ngOnInit() {
  }

}
