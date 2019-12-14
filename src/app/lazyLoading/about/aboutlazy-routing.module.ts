import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutLazyloadingComponent } from './about-lazyloading.component';


const routes: Routes=[
  { path:'', component: AboutLazyloadingComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutlazyRoutingModule { }
