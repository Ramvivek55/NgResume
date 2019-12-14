import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  datas = [ {
    name: 'Angular js'
  },{
    name: 'Javascript'
  },{
    name: 'HTML'
  },{
    name: 'CSS'
  },{
    name: 'Jquery'
  },{
    name: 'Boostrap'
  }
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.datas, event.previousIndex, event.currentIndex);
  }


}
