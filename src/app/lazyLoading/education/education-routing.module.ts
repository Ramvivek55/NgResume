import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducationLazyloadingComponent } from './education-lazyloading.component';

const routes: Routes=[
  {path:'', component: EducationLazyloadingComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EducationRoutingModule { }
