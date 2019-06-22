import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ResourceEffects } from './effects';
import { reducers } from './reducers';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('resources', reducers),
    EffectsModule.forFeature([ResourceEffects])
  ],
  declarations: []
})
export class ResourceStoreModule { }
