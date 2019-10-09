import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NotificationDate} from '../entity/notificationDate';
import {Setting} from '../entity/setting';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private BASE_URL = '/api/workout/settings';

  constructor(private http: HttpClient) {
  }

  getSettings() {
    return this.http.get(`${this.BASE_URL}`);
  }

  saveSettings2(setting: NotificationDate, headers) {
    return this.http.post(`${this.BASE_URL}Notification/save`, setting, headers);
  }

  saveSettings(setting: Setting, headers) {
    return this.http.post(`${this.BASE_URL}/save`, setting, headers);
  }
}


