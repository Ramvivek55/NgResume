import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-calendar-lazyloading',
  templateUrl: './calendar-lazyloading.component.html',
  styleUrls: ['./calendar-lazyloading.component.css']
})
export class CalendarLazyloadingComponent implements OnInit {
  values: any=[];
  constructor(public dialog: MatDialog) { }


  ngOnInit() {
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogModalComponent);
  }

}

@Component({
  selector: 'app-dialog-modal',
  templateUrl: './dialog-modal.component.html'
})

export class DialogModalComponent  {

}
