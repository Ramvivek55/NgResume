import { NgModule } from '@angular/core';
import { SkillsLazyloadingComponent, DialogModalComponent } from './skills-lazyloading.component';
import { SkillsRoutingModule } from './skills-routing.module';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [SkillsLazyloadingComponent, DialogModalComponent],
  imports: [SkillsRoutingModule,CommonModule,MatButtonModule,MatDialogModule,MatCardModule],
  entryComponents: [DialogModalComponent]
  
})
export class SkillslazyModule { }
