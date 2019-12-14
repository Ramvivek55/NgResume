import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MockContact } from './mock.contact'
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

    private mockData = from([MockContact]);

  constructor(private http: HttpClient ) { }

  personalInfo(): Observable<any>{
        return this.mockData;
  }

}
