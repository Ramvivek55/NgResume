import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-skills-lazyloading',
  templateUrl: './skills-lazyloading.component.html',
  styleUrls: ['./skills-lazyloading.component.css']
})
export class SkillsLazyloadingComponent implements OnInit {

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
