import { NgModule } from '@angular/core';
import { CalendarLazyloadingComponent } from './calendar-lazyloading.component';
import { CalendarRoutingModule } from './calendar-routing.module'
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [CalendarLazyloadingComponent],
  imports: [CalendarRoutingModule,DragDropModule]
})
export class CalendarlazyModule { }
