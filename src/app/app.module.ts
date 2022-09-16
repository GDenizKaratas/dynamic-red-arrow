import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RedArrowModule } from './red-arrow/red-arrow.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RedArrowModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
