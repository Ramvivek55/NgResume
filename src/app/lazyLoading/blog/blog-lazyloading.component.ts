import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-blog-lazyloading',
  templateUrl: './blog-lazyloading.component.html',
  styleUrls: ['./blog-lazyloading.component.css']
})
export class BlogLazyloadingComponent implements OnInit {

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
