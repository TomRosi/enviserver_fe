import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from './base.component';
import { RouterModule } from "@angular/router";
import { routes } from "@app/layout/base/base.routes";
import { TabsModule } from "@app/layout/tabs/tabs.module";
import {MenubarModule} from 'primeng/menubar';

import {FilterModule} from "@app/feature/filter/filter.module";
import {ButtonModule} from "primeng/button";


@NgModule({
  declarations: [BaseComponent],
  imports: [
    CommonModule,
    TabsModule,
    FilterModule,
    MenubarModule,
    ButtonModule,
    RouterModule.forChild(routes)
  ]
})
export class BaseModule { }
