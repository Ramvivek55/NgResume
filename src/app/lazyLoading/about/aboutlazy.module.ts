import { NgModule } from '@angular/core';
import { AboutLazyloadingComponent, DialogModalComponent} from './about-lazyloading.component';
import { AboutlazyRoutingModule } from './aboutlazy-routing.module';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [AboutLazyloadingComponent, DialogModalComponent],
  imports: [AboutlazyRoutingModule,MatButtonModule,MatDialogModule,CommonModule,MatCardModule],
  entryComponents: [DialogModalComponent],
})
export class AboutlazyModule { }
