import { Action } from '@ngrx/store';
import { Notification } from '@app/core';

export enum ActionTypes {
  LOAD_NOTIFICATIONS = '[Notifications] Load Notifications',
  ADD_NOTIFICATION = '[Notifications] Add Notification',
  REMOVE_NOTIFICATION = '[Notifications] Remove Notification'
}

export class LoadNotificationsAction implements Action {
  readonly type = ActionTypes.LOAD_NOTIFICATIONS;
}

export class AddNotification implements Action {
  readonly type = ActionTypes.ADD_NOTIFICATION;
  constructor(public payload: Notification) {}
}

export class RemoveNotification implements Action {
  readonly type = ActionTypes.REMOVE_NOTIFICATION;
  constructor(public payload: number) {}
}

export type Actions =
  | LoadNotificationsAction
  | AddNotification
  | RemoveNotification;
