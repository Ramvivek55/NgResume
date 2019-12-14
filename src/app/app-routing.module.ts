import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes=[
  { path: 'about', loadChildren: '../app/lazyLoading/about/aboutlazy.module#AboutlazyModule' },
  { path: 'skills', loadChildren: '../app/lazyLoading/skills/skillslazy.module#SkillslazyModule' },
  { path: 'blog', loadChildren: '../app/lazyLoading/blog/bloglazy.module#BloglazyModule' },
  { path: 'contact', loadChildren: '../app/lazyLoading/contact/contactlazy.module#ContactlazyModule' },
  { path: 'education', loadChildren: '../app/lazyLoading/education/educationlazy.module#EducationlazyModule' },
  { path: 'experience', loadChildren: '../app/lazyLoading/experience/experiencelazy.module#ExperiencelazyModule' },
  { path: 'reference', loadChildren: '../app/lazyLoading/reference/referencelazy.module#ReferencelazyModule' },
  { path: 'portfolio', loadChildren: '../app/lazyLoading/portfolio/portfoliolazy.module#PortfoliolazyModule' },
  { path: 'calendar', loadChildren: '../app/lazyLoading/calendar/calendarlazy.module#CalendarlazyModule'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
