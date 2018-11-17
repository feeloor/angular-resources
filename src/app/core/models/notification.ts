import { NotificationType } from './notification-type';

export class Notification {
  id: number;
  message: string;
  type: NotificationType;
  timeout?: number;
}
