import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { LoadingComponent } from './components';
import { CapitalizeFirst } from './pipes';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    LoadingComponent,
    CapitalizeFirst
  ],
  declarations: [LoadingComponent, CapitalizeFirst]
})
export class SharedModule { }
