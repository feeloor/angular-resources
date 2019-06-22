import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Notification, NotificationType } from '@app/core';
import {
  NotificationStoreActions,
  NotificationStoreSelectors,
  RootStoreState
} from '@app/root-store';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotificationsComponent implements OnInit {
  notifications$: Observable<Notification[]>;

  constructor(private store$: Store<RootStoreState.State>) { }

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
