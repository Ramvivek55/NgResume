import { Injectable } from '@angular/core';
import { HttpClient } from'@angular/common/http';
import {Observable, from } from 'rxjs';
import { MockApp } from './app.mock';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  private mockApp = from([MockApp]);

  headerData(): Observable<any>{
        return this.mockApp;
  }

}
