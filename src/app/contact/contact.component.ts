import { Component, OnInit } from '@angular/core';
import { ContactService } from './contact.service';
import { Contact } from './contact.model';
import { MouseEvent } from '@agm/core';

interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

   details: Contact;
   lat: number = 13.017844;
   lng: number = 80.154037;
   zoom: number = 10;

  constructor(private contactservice: ContactService) {

   }

 personalData(){
         this.contactservice.personalInfo().subscribe(response => {
           this.details =response;
           console.log(this.details);
        }),error =>{
          alert('Unable to fetch data');
        }
 }

 ngOnInit() { 
   this.personalData();
}

markers: marker[] = [
  {
    lat: 13.017844,
    lng: 80.154037,
    label: 'A',
    draggable: true
  }
]

mapClicked($event: MouseEvent) {
  this.markers.push({
    lat: $event.coords.lat,
    lng: $event.coords.lng,
    draggable: true
  });
}

markerDragEnd(m: marker, $event: MouseEvent) {
  console.log('dragEnd', m, $event);
}

}
