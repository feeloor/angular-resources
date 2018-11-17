import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { ResourceEffects } from './effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('resources', reducers),
    EffectsModule.forFeature([ResourceEffects])
  ],
  declarations: []
})
export class ResourceStoreModule {}
