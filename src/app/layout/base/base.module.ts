import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from './base.component';
import { RouterModule } from "@angular/router";
import { routes } from "@app/layout/base/base.routes";
import { TabsModule } from "@app/layout/tabs/tabs.module";

import {FilterModule} from "@app/feature/filter/filter.module";


@NgModule({
  declarations: [BaseComponent],
  imports: [
    CommonModule,
    TabsModule,
    FilterModule,
    RouterModule.forChild(routes)
  ]
})
export class BaseModule { }
