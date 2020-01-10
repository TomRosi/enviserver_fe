import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SensorsInterface} from "@app/feature/sensors/sensorsInterface";
import {AlertsInterface} from "@app/feature/alerts/alerts.interface";
import {MeasurementsInterface} from "@app/feature/measurements/measurementsInterface";
import {Observable} from "rxjs";
import {StateManagementService} from "@app/core/state-management.service";

@Component({
  selector: 'app-dialog-view',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  @Input('data') data: SensorsInterface | AlertsInterface | MeasurementsInterface;
  @Input('display') display: boolean;
  @Input('currentTab') currentTab: Observable<string>;
  @Output() displayChange = new EventEmitter();

  constructor(
    private stateManagementService: StateManagementService,
  ) { }

  ngOnInit() {
    this.stateManagementService.currentTab.subscribe(currentTab => {
      this.currentTab = currentTab;
    });
  }

  hideDialog() {
    this.displayChange.emit(false);
  }

  save() {
    console.log("Will save the detail");
    this.hideDialog();
  }
}
