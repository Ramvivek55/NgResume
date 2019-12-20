import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

declare var $: any;
@Component({
  selector: 'app-reference',
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.css']
})
export class ReferenceComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogModelComponent, {
      width: '400px',
    });
  }


  ngOnInit() {
  }

  ngAfterViewInit() {
    
    $('#pass1').click(function () {
      $('#fail1').removeClass('a1');
      $('#fail2').addClass('a2');
      $('#fail3').addClass('a3');
      $('#fail4').addClass('a4');
      $('#fail5').addClass('a5');
    });

    $('#pass2').click(function () {
      $('#fail1').addClass('a1');
      $('#fail2').removeClass('a2');
      $('#fail3').addClass('a3');
      $('#fail4').addClass('a4');
      $('#fail5').addClass('a5');
    });

    $('#pass3').click(function () {
      $('#fail1').addClass('a1');
      $('#fail2').addClass('a2');
      $('#fail3').removeClass('a3');
      $('#fail4').addClass('a4');
      $('#fail5').addClass('a5');
    });

    $('#pass4').click(function () {
      $('#fail1').addClass('a1');
      $('#fail2').addClass('a2');
      $('#fail3').addClass('a3');
      $('#fail4').removeClass('a4');
      $('#fail5').addClass('a5');
    });

    $('#pass5').click(function () {
      $('#fail1').addClass('a1');
      $('#fail2').addClass('a2');
      $('#fail3').addClass('a3');
      $('#fail4').addClass('a4');
      $('#fail5').removeClass('a5');
    });

  }

}


@Component({
  selector: 'app-dialog-model',
  templateUrl: './dialog-model.component.html',
  styleUrls: ['./dialog-model.component.css']
})
export class DialogModelComponent {

  constructor(public dialogRef: MatDialogRef<DialogModelComponent>) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
