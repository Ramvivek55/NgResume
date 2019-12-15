import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
export interface data {
  value: string;
}

@Component({
  selector: 'app-contact-lazyloading',
  templateUrl: './contact-lazyloading.component.html',
  styleUrls: ['./contact-lazyloading.component.css']
})
export class ContactLazyloadingComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  lists: data[] = [
    {value: "Male"},
    {value: "Female"} 
  ];

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
