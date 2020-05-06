import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CronTabComponent } from './cron-tab/containers/cron-tab.component';
import { MinutesComponent } from './cron-tab/components/minutes/minutes.component';



@NgModule({
  declarations: [
    AppComponent,
    CronTabComponent,
    MinutesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
