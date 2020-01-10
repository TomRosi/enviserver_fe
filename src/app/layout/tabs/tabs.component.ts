import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, ActivationStart, Router, RouterOutlet, UrlSegment} from "@angular/router";
import {TabView} from "primeng/tabview";
import { Location } from '@angular/common';
import {StateManagementService} from "@app/core/state-management.service";


@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabsComponent implements OnInit, AfterViewInit {

  @ViewChild('tabView', {static: true}) tabView: TabView;
  selectedTabIndex: number;
  alreadyActivated: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ref: ChangeDetectorRef,
    private location: Location,
    private stateManagementService: StateManagementService,
  ) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.route.firstChild.url.subscribe((param: UrlSegment[]) => {
      const selectedTabIndexByUrl: number = this.tabView.tabs.map(tab => tab.header.toLocaleLowerCase()).indexOf(param.toString());
      this.changeTab({index: selectedTabIndexByUrl});
    });
  }

  changeTab(event) {
    this.selectedTabIndex = event.index;
    const currentUrl = "/tabs/" + this.tabView.tabs[this.selectedTabIndex].header.toLocaleLowerCase();
    if (this.alreadyActivated.indexOf(currentUrl) === -1) {
      this.router.navigate(['/tabs/' + this.tabView.tabs[this.selectedTabIndex].header.toLocaleLowerCase()]);
      this.alreadyActivated.push(currentUrl);
    } else {
      this.location.replaceState('/tabs/' + this.tabView.tabs[this.selectedTabIndex].header.toLocaleLowerCase());
    }
    this.stateManagementService.currentTab.emit(this.tabView.tabs[this.selectedTabIndex].header.toLocaleLowerCase());
  }

}
