import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AddNotification } from '@app/root-store/notification-store/actions';
import * as RootStoreState from '@app/root-store/root-state';
import { NotificationType, Notification } from '../models';

let notificationId = 1;

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  constructor(private store$: Store<RootStoreState.State>) {}

  notify(msg: string, type: 'success' | 'error' | 'info'): void {
    const newNotification = <Notification>{
      id: notificationId++,
      type: NotificationType[type.charAt(0).toUpperCase() + type.slice(1)],
      message: msg,
      timeout: 3000
    };

    this.store$.dispatch(new AddNotification(newNotification));
  }
}
