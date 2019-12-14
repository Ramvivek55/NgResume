import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-calendar-lazyloading',
  templateUrl: './calendar-lazyloading.component.html',
  styleUrls: ['./calendar-lazyloading.component.css']
})
export class CalendarLazyloadingComponent implements OnInit {
  values: any=[];
  constructor() { }


  ngOnInit() {
  }


}
