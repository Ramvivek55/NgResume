import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactLazyloadingComponent } from './contact-lazyloading.component';

const routes: Routes=[
  {path:'', component: ContactLazyloadingComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactlazyRoutingModule { }
