import { NgModule } from '@angular/core';
import { ExperienceLazyloadingComponent, DialogModalComponent } from './experience-lazyloading.component';
import { ExperiencelazyRoutingModule } from './experiencelazy-routing.module';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
@NgModule({
  declarations: [ExperienceLazyloadingComponent, DialogModalComponent],
  imports: [ExperiencelazyRoutingModule,CommonModule,MatButtonModule,MatDialogModule,MatCardModule],
  entryComponents: [DialogModalComponent]
})
export class ExperiencelazyModule { }
