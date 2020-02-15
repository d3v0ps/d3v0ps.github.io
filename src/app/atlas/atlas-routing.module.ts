import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AtlasComponent} from './atlas.component';

const routes: Routes = [
  {
    path: ':id',
    component: AtlasComponent,
  },
  {
    path: '**',
    component: AtlasComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AtlasRoutingModule {}

