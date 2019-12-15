import { NgModule } from '@angular/core';
import { ReferenceLazyloadingComponent,DialogModalComponent } from './reference-lazyloading.component';
import { ReferenceRoutingModule } from './reference-routing.module';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [ReferenceLazyloadingComponent, DialogModalComponent],
  imports: [ReferenceRoutingModule,CommonModule,MatButtonModule,MatDialogModule,MatCardModule],
  entryComponents: [DialogModalComponent]
})
export class ReferencelazyModule { }
