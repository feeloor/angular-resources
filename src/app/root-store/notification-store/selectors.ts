import { State, featureAdapter } from './state';
import { createFeatureSelector, MemoizedSelector } from '@ngrx/store';
import { Notification } from '@app/core';

export const selectNotificationState: MemoizedSelector<
  object,
  State
> = createFeatureSelector<State>('notifications');

export const selectAllNotifications: (
  state: object
) => Notification[] = featureAdapter.getSelectors(selectNotificationState)
  .selectAll;
