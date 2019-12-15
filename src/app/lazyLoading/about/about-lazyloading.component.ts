import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-about-lazyloading',
  templateUrl: './about-lazyloading.component.html',
  styleUrls: ['./about-lazyloading.component.css']
})
export class AboutLazyloadingComponent implements OnInit {

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
