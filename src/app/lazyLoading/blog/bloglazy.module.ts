import { NgModule } from '@angular/core';
import { BlogLazyloadingComponent, DialogModalComponent } from './blog-lazyloading.component';
import { BloglazyRoutingModule } from './bloglazy-routing.module';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [BlogLazyloadingComponent, DialogModalComponent],
  imports: [BloglazyRoutingModule,CommonModule,MatButtonModule,MatDialogModule,MatCardModule],
  entryComponents: [DialogModalComponent]
})
export class BloglazyModule { }
