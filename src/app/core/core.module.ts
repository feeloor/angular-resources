import { NgModule } from '@angular/core';
import { AuthGuard, AuthService } from './auth';
import { LoggingService } from './logging';
import { NotificationService } from './notification';

@NgModule({
  providers: [
    AuthGuard, AuthService,
    LoggingService, NotificationService
  ]
})
export class CoreModule { }
