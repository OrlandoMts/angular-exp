import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graphic1Component } from './graphic1/graphic1.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';

const PagesRoutes: Routes = [
  {
    path: 'dashboard',
    component: PagesComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'progress', component: ProgressComponent },
      { path: 'grafica1', component: Graphic1Component },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(PagesRoutes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
