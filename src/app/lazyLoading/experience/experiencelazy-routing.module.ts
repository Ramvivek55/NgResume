import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperienceLazyloadingComponent } from './experience-lazyloading.component';

const routes: Routes=[
  { path:'', component: ExperienceLazyloadingComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExperiencelazyRoutingModule { }
