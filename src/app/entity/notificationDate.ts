import {User} from './user';

export class NotificationDate {
  date: Date;

  constructor(private notificationTime: Date) {
    this.date = notificationTime;
  }

}
