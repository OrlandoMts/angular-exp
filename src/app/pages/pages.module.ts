import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graphic1Component } from './graphic1/graphic1.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';

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
  ],
  imports: [CommonModule, SharedModule, RouterModule],
})
export class PagesModule {}
