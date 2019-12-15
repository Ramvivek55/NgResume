import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-experience-lazyloading',
  templateUrl: './experience-lazyloading.component.html',
  styleUrls: ['./experience-lazyloading.component.css']
})
export class ExperienceLazyloadingComponent implements OnInit {

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
