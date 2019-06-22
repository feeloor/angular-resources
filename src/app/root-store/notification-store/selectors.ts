import { Notification } from '@app/core';
import { createFeatureSelector, MemoizedSelector } from '@ngrx/store';
import { featureAdapter, State } from './state';

export const selectNotificationState: MemoizedSelector<
  object,
  State
> = createFeatureSelector<State>('notifications');

export const selectAllNotifications: (
  state: object
) => Notification[] = featureAdapter.getSelectors(selectNotificationState)
    .selectAll;
