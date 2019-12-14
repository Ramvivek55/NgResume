import { Component, OnInit } from '@angular/core';

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-contact-lazyloading',
  templateUrl: './contact-lazyloading.component.html',
  styleUrls: ['./contact-lazyloading.component.css']
})
export class ContactLazyloadingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

}
