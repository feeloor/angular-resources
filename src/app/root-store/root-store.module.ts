import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NotificationStoreModule } from './notification-store';
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
export class RootStoreModule { }
