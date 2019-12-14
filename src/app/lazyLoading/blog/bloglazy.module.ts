import { NgModule } from '@angular/core';
import { BlogLazyloadingComponent } from './blog-lazyloading.component';
import { BloglazyRoutingModule } from './bloglazy-routing.module'


@NgModule({
  declarations: [BlogLazyloadingComponent],
  imports: [BloglazyRoutingModule]
})
export class BloglazyModule { }
