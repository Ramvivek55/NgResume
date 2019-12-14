import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogLazyloadingComponent } from './blog-lazyloading.component';

const routes: Routes=[
  {path:'', component: BlogLazyloadingComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BloglazyRoutingModule { }
