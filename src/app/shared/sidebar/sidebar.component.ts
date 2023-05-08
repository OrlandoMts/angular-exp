import { Component } from '@angular/core';
import { SidebarService } from 'src/app/services';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [],
})
export class SidebarComponent {
  public menu: any[] = [];
  constructor(private _sidebarSrv: SidebarService) {
    this.menu = this._sidebarSrv.getMenu;
  }
}
