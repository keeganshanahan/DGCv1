import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CalendarPage } from './calendar.page';
 
import { CalendarPageRoutingModule } from './calendar-routing.module';
 
import { NgCalendarModule  } from 'ionic2-calendar';

import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
registerLocaleData(localeDe);
 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalendarPageRoutingModule,
    NgCalendarModule,
    CalendarPage
  ],
  declarations: [CalendarPage],
  providers: [
    { provide: LOCALE_ID, useValue: 'de-DE' }
  ]
})
export class CalendarModule {}