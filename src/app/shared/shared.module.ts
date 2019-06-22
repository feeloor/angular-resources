import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { LoadingComponent } from './components';
import { MaterialModule } from './material.module';
import { CapitalizeFirst } from './pipes';

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
