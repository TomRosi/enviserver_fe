import {EventEmitter, Output} from '@angular/core';

export class StateManagementService {
  @Output() filteredData: EventEmitter<any> = new EventEmitter<any>();
  @Output() currentTab: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}
}



