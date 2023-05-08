import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  private hrefdef = './assets/css/colors/default-dark.css';
  private _linktheme = document.querySelector('#theme');

  constructor() {
    const hrefcss = localStorage.getItem('theme');
    hrefcss && hrefcss.length > 0
      ? this._linktheme?.setAttribute('href', hrefcss)
      : this._linktheme?.setAttribute('href', this.hrefdef);
  }

  public changeTheme(theme: string): void {
    const hrefcss = `./assets/css/colors/${theme}.css`;
    this._linktheme?.setAttribute('href', hrefcss);
    localStorage.setItem('theme', hrefcss);
    this.setClassWorking(); //Actualiza la clase del working
  }

  public setClassWorking(): void {
    const _list: NodeListOf<Element> = document.querySelectorAll('.selector');
    _list.forEach((ele) => {
      ele.classList.remove('working');
      const btnTheme = ele.getAttribute('data-theme');
      // si el tema actual coincide con un enlace dependiendo de su propiedad se le asgina la case
      const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`;
      const currenTheme = this._linktheme?.getAttribute('href');
      if (btnThemeUrl === currenTheme) {
        ele.classList.add('working');
      }
    });
  }
}
