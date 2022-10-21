import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CommonLibraryModule } from 'common-libary';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonLibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
