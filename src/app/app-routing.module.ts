import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FluidComponent } from '@app/layout/fluid/fluid.component';
import {BaseComponent} from "@app/layout/base/base.component";
import {AuthGuard} from "@app/core/auth.guard";

const routes: Routes = [
  {
    canActivate: [AuthGuard],
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full',
  },
  {
    canActivate: [AuthGuard],
    path: '',
    component: BaseComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('@app/layout/tabs/tabs.module').then(m => m.TabsModule),
      }
    ]
  },
  {
    path: 'login',
    component: FluidComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('@app/feature/login/login.module').then(m => m.LoginModule),
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
