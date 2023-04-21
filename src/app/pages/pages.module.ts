import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { FormsModule } from '@angular/forms';
import { IncrementComponent } from '../components/increment/increment.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graphic1Component } from './graphic1/graphic1.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { DoughnutComponent } from '../components/doughnut/doughnut.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    PagesComponent,
    Graphic1Component,
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    PagesComponent,
    Graphic1Component,
    // IncrementComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule,
    IncrementComponent,
    DoughnutComponent
  ],
})
export class PagesModule {}
