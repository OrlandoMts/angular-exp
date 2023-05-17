import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccountSettingComponent } from './account-setting/account-setting.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graphic1Component } from './graphic1/graphic1.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { PromiseComponent } from './promise/promise.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const PagesRoutes: Routes = [
  {
    path: 'dashboard',
    component: PagesComponent,
    children: [
      { path: '', component: DashboardComponent, data: { title: 'Dashboard' } },
      {
        path: 'progress',
        component: ProgressComponent,
        data: { title: 'Progress' },
      },
      {
        path: 'grafica1',
        component: Graphic1Component,
        data: { title: 'Graficas' },
      },
      {
        path: 'account-settings',
        component: AccountSettingComponent,
        data: { title: 'Settings' },
      },
      {
        path: 'promise',
        component: PromiseComponent,
        data: { title: 'Promise' },
      },
      { path: 'rxjs', component: RxjsComponent, data: { title: 'RXJS' } },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(PagesRoutes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
