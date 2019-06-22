import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NotificationEffects } from './effects';
import { featureReducer } from './reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('notifications', featureReducer),
    EffectsModule.forFeature([NotificationEffects])
  ],
  declarations: []
})
export class NotificationStoreModule { }
