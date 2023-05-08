import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services';

declare function customInitFunctions(): void;
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [],
})
export class PagesComponent implements OnInit {
  /**
   * @ts-ignore puede ir arriba del declare function y quita el error que surge
   * si no tiene el void
   */
  // Inyeccion del servicio para obtener el tema actual
  constructor(private _settSrv: SettingsService) {}

  ngOnInit(): void {
    customInitFunctions();
  }
}
