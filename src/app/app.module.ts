import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FirebaseModule } from '@app/firebase.module';
import { AppRoutingModule } from '@app/app-routing.module';
import { LayoutModule } from '@app/layout/layout.module';
import { CoreModule } from '@app/core/core.module';
import { RootStoreModule } from './root-store';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FirebaseModule,
    LayoutModule,
    CoreModule,
    RootStoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
