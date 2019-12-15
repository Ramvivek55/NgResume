import { NgModule } from '@angular/core';
import { ContactLazyloadingComponent, DialogModalComponent} from './contact-lazyloading.component';
import { ContactlazyRoutingModule } from './contactlazy-routing.module';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [ContactLazyloadingComponent, DialogModalComponent],
  imports: [ContactlazyRoutingModule,MatButtonModule,CommonModule,MatButtonModule,MatDialogModule,MatCardModule],
  entryComponents: [DialogModalComponent]
})
export class ContactlazyModule { }
