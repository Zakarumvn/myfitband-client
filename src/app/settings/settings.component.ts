import { Component, OnInit } from '@angular/core';
import {SettingsService} from '../service/settings.service';
import {NotificationDate} from '../entity/notificationDate';
import {Observable} from 'rxjs';
import {Setting} from '../entity/setting';

export const contentHeaders = new Headers();
contentHeaders.append('Accept', 'application/json');
contentHeaders.append('Content-Type', 'application/json');
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})

export class SettingsComponent implements OnInit {
  settings: Setting;
  time: any;

  constructor(private settingService: SettingsService) {
    this.settings = new Setting();
  }

  ngOnInit() {
    this.getSettings();
  }
  getSettings() {
    this.settingService.getSettings()
      .subscribe((data: any) => {
        if (data != null) {
          this.settings = data;
        }
        console.log(this.settings);
      });
  }

  saveSettings() {
    this.settings.active = 1;
    this.settingService.saveSettings2(this.repackDataToSave(this.settings), contentHeaders).subscribe(data => {
      console.log('saved settings');
    });
  }

  repackDataToSave(setting: Setting) {
    return new NotificationDate(setting.notificationTime);
  }

}
