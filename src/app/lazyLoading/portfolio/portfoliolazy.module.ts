import { NgModule } from '@angular/core';
import { PortfolioLazyloadingComponent } from './portfolio-lazyloading.component';
import { PortfolioRoutingModule } from './portfolio-routing.module'


@NgModule({
  declarations: [PortfolioLazyloadingComponent],
  imports: [PortfolioRoutingModule]
})
export class PortfoliolazyModule { }
