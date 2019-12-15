import { NgModule } from '@angular/core';
import { EducationLazyloadingComponent, DialogModalComponent} from './education-lazyloading.component';
import { EducationRoutingModule } from './education-routing.module';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [EducationLazyloadingComponent, DialogModalComponent],
  imports: [EducationRoutingModule,CommonModule,MatButtonModule,MatDialogModule,MatCardModule],
  entryComponents: [DialogModalComponent]
})
export class EducationlazyModule { }
