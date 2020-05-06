import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CronTabComponent } from './cron-tab/containers/cron-tab.component';
import { MinutesComponent } from './cron-tab/components/minutes/minutes.component';
import { HoursComponent } from './cron-tab/components/hours/hours.component';
import { DaysComponent } from './cron-tab/components/days/days.component';
import { MonthsComponent } from './cron-tab/components/months/months.component';
import { WeekDaysComponent } from './cron-tab/components/week-days/week-days.component';



@NgModule({
  declarations: [
    AppComponent,
    CronTabComponent,
    MinutesComponent,
    HoursComponent,
    DaysComponent,
    MonthsComponent,
    WeekDaysComponent,
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
