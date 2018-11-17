import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { featureReducer } from './reducer';
import { EffectsModule } from '@ngrx/effects';
import { NotificationEffects } from './effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('notifications', featureReducer),
    EffectsModule.forFeature([NotificationEffects])
  ],
  declarations: []
})
export class NotificationStoreModule {}
