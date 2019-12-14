import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { App } from './app.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'resumeNg';
  
  datas: App;
  constructor(private appService: AppService){
  }

  recieveData(){
    this.appService.headerData().subscribe(data=>{
        this.datas =data;
        console.log(this.datas);
    }),error =>{
      alert('Data not recieved');
    }
  }

  ngOnInit(){
    this.recieveData();
  }


}
