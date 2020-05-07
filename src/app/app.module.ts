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
import { CommandComponent } from './cron-tab/components/command/command.component';
import { TopNavBarComponent } from './components/top-nav-bar/top-nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CommandHandleComponent } from './cron-tab/components/command-handle/command-handle.component';



@NgModule({
  declarations: [
    AppComponent,
    CronTabComponent,
    MinutesComponent,
    HoursComponent,
    DaysComponent,
    MonthsComponent,
    WeekDaysComponent,
    CommandComponent,
    TopNavBarComponent,
    FooterComponent,
    CommandHandleComponent,
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
