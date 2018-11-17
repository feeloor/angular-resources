import {
  RootComponent,
  HeaderComponent,
  UserInfoComponent,
  NotificationsComponent,
  NotificationListComponent
} from './components';
import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { LayoutRoutingModule } from './layout-routing.module';

@NgModule({
  imports: [SharedModule, LayoutRoutingModule],
  declarations: [
    RootComponent,
    HeaderComponent,
    UserInfoComponent,
    NotificationsComponent,
    NotificationListComponent
  ]
})
export class LayoutModule {}
