import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotPageComponent } from './notpage/notpage.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'session',
    loadChildren: () => import('./auth/auth.routes').then((r) => r.AuthRoutes),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./pages/pages.routes').then((r) => r.PagesRoutes),
  },
  { path: '**', component: NotPageComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
