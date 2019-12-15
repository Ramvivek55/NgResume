import { NgModule } from '@angular/core';
import { PortfolioLazyloadingComponent, DialogModalComponent } from './portfolio-lazyloading.component';
import { PortfolioRoutingModule } from './portfolio-routing.module';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [PortfolioLazyloadingComponent, DialogModalComponent],
  imports: [PortfolioRoutingModule,CommonModule,MatButtonModule,MatDialogModule,MatCardModule],
  entryComponents: [DialogModalComponent]
})
export class PortfoliolazyModule { }
