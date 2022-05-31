import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Subcomponent1Component } from './components/subcomponent1/subcomponent1.component';
import { IframeAppComponent } from './components/iframe-app/iframe-app.component';

@NgModule({
  declarations: [
    AppComponent,
    Subcomponent1Component,
    IframeAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
