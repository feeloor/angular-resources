import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { NotificationStoreModule } from './notification-store';
import { EffectsModule } from '@ngrx/effects';
import { ResourceStoreModule } from './resource-store';

@NgModule({
  imports: [
    CommonModule,
    NotificationStoreModule,
    ResourceStoreModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([])
  ],
  declarations: []
})
export class RootStoreModule {}
