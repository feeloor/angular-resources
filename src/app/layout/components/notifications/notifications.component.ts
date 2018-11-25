import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {
  RootStoreState,
  NotificationStoreSelectors,
  NotificationStoreActions
} from '@app/root-store';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Notification, NotificationType } from '@app/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotificationsComponent implements OnInit {
  notifications$: Observable<Notification[]>;

  constructor(private store$: Store<RootStoreState.State>) {}

  ngOnInit() {
    this.notifications$ = this.store$.pipe(
      select(NotificationStoreSelectors.selectAllNotifications)
    );
  }

  getClassFromType(type: NotificationType): string {
    return NotificationType[type].toLowerCase();
  }

  closeNotification(notificationId: number): void {
    this.store$.dispatch(
      new NotificationStoreActions.RemoveNotification(notificationId)
    );
  }
}
