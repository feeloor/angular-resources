import { NotificationStoreState } from './notification-store';
import { ResourcesState } from './resource-store/states';

export interface State {
  notifications: NotificationStoreState.State;
  resources: ResourcesState;
}
