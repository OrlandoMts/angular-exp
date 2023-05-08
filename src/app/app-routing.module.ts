import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotPageComponent } from './notpage/notpage.component';
import { PagesRoutingModule } from './pages/pages.routes';

const routes: Routes = [
  // {
  //   path: '',
  //   children: [
  //     { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  //     {
  //       path: 'session',
  //       loadChildren: () =>
  //         import('./auth/auth.routes').then((r) => r.AuthRoutes),
  //     },
  //     // {
  //     //   path: 'dashboard',
  //     //   loadChildren: () =>
  //     //     import('./pages/pages.routes').then((r) => r.PagesRoutes),
  //     // },
  //   ],
  // },
  // { path: '**', component: NotPageComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: '',
    loadChildren: () =>
      import('./auth/auth.routes').then((mod) => mod.AuthRoutes),
  },
  { path: '**', component: NotPageComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes), PagesRoutingModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
