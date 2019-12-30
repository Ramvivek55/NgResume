import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

declare var $: any;
@Component({
  selector: 'app-reference',
  templateUrl: './reference.component.html',
  // styleUrls: ['./reference.component.css']
  styles: [`
    .mat-dialog-container {
      padding: 0px !important;
      box-shadow: none !important;
    }
    .cdkoverlay{
      display: none;
    }
    .cdks{
      opacity: 0;
    }
    .sidelines{
      position: absolute;
    }
    
  `],
  encapsulation: ViewEncapsulation.None
})
export class ReferenceComponent implements OnInit {

  isHovering: boolean;

  constructor(public dialog: MatDialog) { }

  openDialog($event): void {
    const dialogRef = this.dialog.open(DialogModelComponent) 
  }


  ngOnInit() {
  }


  ngAfterViewInit() {
    
    $('#pass1').mouseover(function () {
      $('#fail1').removeClass('a1');
      $('#fail2').addClass('a2');
      $('#fail3').addClass('a3');
      $('#fail4').addClass('a4');
      $('#fail5').addClass('a5');
    });

    $('#pass2').mouseover(function () {
      $('#fail1').addClass('a1');
      $('#fail2').removeClass('a2');
      $('#fail3').addClass('a3');
      $('#fail4').addClass('a4');
      $('#fail5').addClass('a5');
    });

    $('#pass3').mouseover(function () {
      $('#fail1').addClass('a1');
      $('#fail2').addClass('a2');
      $('#fail3').removeClass('a3');
      $('#fail4').addClass('a4');
      $('#fail5').addClass('a5');
    });

    $('#pass4').mouseover(function () {
      $('#fail1').addClass('a1');
      $('#fail2').addClass('a2');
      $('#fail3').addClass('a3');
      $('#fail4').removeClass('a4');
      $('#fail5').addClass('a5');
    });

    $('#pass5').mouseover(function () {
      $('#fail1').addClass('a1');
      $('#fail2').addClass('a2');
      $('#fail3').addClass('a3');
      $('#fail4').addClass('a4');
      $('#fail5').removeClass('a5');
    });

  }



  changeText1(){
  this.isHovering =  true;
  }

  changeText2(){
    this.isHovering =  false;
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
