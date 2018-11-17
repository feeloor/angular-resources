import { createEntityAdapter, EntityState, EntityAdapter } from '@ngrx/entity';
import { Notification } from '@app/core';

export const featureAdapter: EntityAdapter<Notification> = createEntityAdapter<
  Notification
>({
  selectId: (notification: Notification) => notification.id,
  sortComparer: false
});

export interface State extends EntityState<Notification> {}

export const initialState: State = featureAdapter.getInitialState();
