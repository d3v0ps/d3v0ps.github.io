import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {InfiniteloopComponent} from './infiniteloop.component';

const routes: Routes = [
  {
    path: ':id',
    component: InfiniteloopComponent,
  },
  {
    path: '**',
    component: InfiniteloopComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfiniteloopRoutingModule {}

