import { Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

export const PagesRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./dashboard/dashboard.component').then(
            (mod) => mod.DashboardComponent
          ),
      },
      {
        path: 'progress',
        loadComponent: () =>
          import('./progress/progress.component').then(
            (mod) => mod.ProgressComponent
          ),
      },
      {
        path: 'graphic1',
        loadComponent: () =>
          import('./graphic1/graphic1.component').then(
            (mod) => mod.Graphic1Component
          ),
      },
    ],
  },
];
