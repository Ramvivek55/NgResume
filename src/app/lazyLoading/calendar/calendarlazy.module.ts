import { NgModule } from '@angular/core';
import { CalendarLazyloadingComponent, DialogModalComponent} from './calendar-lazyloading.component';
import { CalendarRoutingModule } from './calendar-routing.module'
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
@NgModule({
  declarations: [CalendarLazyloadingComponent, DialogModalComponent],
  imports: [CalendarRoutingModule,DragDropModule,CommonModule,MatButtonModule,MatDialogModule,MatCardModule],
  entryComponents: [DialogModalComponent]
  
})
export class CalendarlazyModule { }
