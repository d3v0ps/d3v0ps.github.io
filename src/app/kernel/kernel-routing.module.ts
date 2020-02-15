import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {KernelComponent} from './kernel.component';

const routes: Routes = [
  {
    path: ':id',
    component: KernelComponent,
  },
  {
    path: '**',
    component: KernelComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KernelRoutingModule {}

