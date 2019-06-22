import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import {
  HeaderComponent,
  NotificationListComponent,
  NotificationsComponent,
  RootComponent,
  UserInfoComponent
} from './components';
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
export class LayoutModule { }
