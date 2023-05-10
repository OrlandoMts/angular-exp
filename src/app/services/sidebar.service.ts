import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  private _menu: any[] = [
    {
      title: 'Dashboard',
      icon: 'mdi mdi-gauge',
      submenu: [
        { title: 'Home', url: '/' },
        { title: 'ProgressBar', url: 'progress' },
        { title: 'Graphic', url: 'grafica1' },
        { title: 'Promise', url: 'promise' },
        { title: 'Rxjs', url: 'rxjs' },
      ],
    },
  ];

  get getMenu() {
    return this._menu;
  }
}
