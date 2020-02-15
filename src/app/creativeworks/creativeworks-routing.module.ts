import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {CreativeworksComponent} from './creativeworks.component';

const routes: Routes = [
  {
    path: ':id',
    component: CreativeworksComponent,
  },
  {
    path: '**',
    component: CreativeworksComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreativeworksRoutingModule {}

