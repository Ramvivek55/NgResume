import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { SkillsLazyloadingComponent } from './skills-lazyloading.component';

const routes: Routes=[
  { path:'', component: SkillsLazyloadingComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkillsRoutingModule { }
