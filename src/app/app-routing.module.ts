import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePage } from './pages/home.page';
import { PortfolioPage } from './pages/portfolio.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: 'portfolio',
    component: PortfolioPage
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
