import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {PersonaComponent} from './persona.component';

const routes: Routes = [
  {
    path: ':id',
    component: PersonaComponent,
  },
  {
    path: '**',
    component: PersonaComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonaRoutingModule {}

