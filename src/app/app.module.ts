import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChambitaComponent } from './chambita/chambita.component';
import { ChambitaModule } from './chambita/chambita.module';

@NgModule({
  declarations: [
    AppComponent,
    ChambitaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChambitaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
