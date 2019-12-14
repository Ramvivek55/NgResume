import { NgModule } from '@angular/core';
import { ContactLazyloadingComponent } from './contact-lazyloading.component';
import { ContactlazyRoutingModule } from './contactlazy-routing.module';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [ContactLazyloadingComponent],
  imports: [ContactlazyRoutingModule,MatInputModule,MatSelectModule,MatButtonModule]
})
export class ContactlazyModule { }
