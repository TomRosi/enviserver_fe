import {Injectable, NgModule} from '@angular/core';
import {Routes, RouterModule, Resolve} from '@angular/router';
import { FluidComponent } from '@app/layout/fluid/fluid.component';
import {BaseComponent} from "@app/layout/base/base.component";
import {AuthGuard} from "@app/core/auth.guard";
import {Observable} from "rxjs";
import {CoreAuth} from "@app/core/core.auth";

@Injectable()
export class LogoutResolve implements Resolve<Observable<boolean>> {
  constructor(
    private coreAuthService: CoreAuth
  ) {}

  resolve() {
    return this.coreAuthService.logout();
  }
}

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
  {
    path: 'logout',
    resolve: {logout: LogoutResolve},
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
  exports: [RouterModule],
  providers: [LogoutResolve],
  imports: [RouterModule.forRoot(routes, {enableTracing: false})]
})
export class AppRoutingModule { }
