import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services';

@Component({
  selector: 'app-account-setting',
  templateUrl: './account-setting.component.html',
  styleUrls: ['./account-setting.component.css'],
})
export class AccountSettingComponent implements OnInit {
  constructor(private _settSrv: SettingsService) {}

  ngOnInit(): void {
    this._settSrv.setClassWorking();
  }

  public changeTheme(theme: string): void {
    this._settSrv.changeTheme(theme);
  }
}
