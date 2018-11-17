import { Component, Input } from '@angular/core';
import { RootStoreState, NotificationStoreActions } from '@app/root-store';
import { Store } from '@ngrx/store';
import { NotificationType } from '@app/core';

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss']
})
export class NotificationListComponent {
  @Input()
  notifications: Notification[];

  constructor(private store$: Store<RootStoreState.State>) {}

  getClassFromType(type: NotificationType): string {
    return NotificationType[type].toLowerCase();
  }

  closeNotification(notificationId: number): void {
    this.store$.dispatch(
      new NotificationStoreActions.RemoveNotification(notificationId)
    );
  }
}
