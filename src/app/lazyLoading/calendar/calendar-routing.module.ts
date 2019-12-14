import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { CalendarLazyloadingComponent } from './calendar-lazyloading.component';

const routes: Routes=[
  { path:'', component: CalendarLazyloadingComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalendarRoutingModule { }
