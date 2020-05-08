import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'home',
    redirectTo: ''
  },
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'infiniteloop',
    loadChildren: () => import('./infiniteloop/infiniteloop.module').then(m => m.InfiniteloopModule)
  },
  {
    path: 'creativeworks',
    loadChildren: () => import('./creativeworks/creativeworks.module').then(m => m.CreativeworksModule)
  },
  {
    path: 'lists',
    loadChildren: () => import('./lists/lists.module').then(m => m.ListsModule)
  },
  {
    path: 'kernel',
    loadChildren: () => import('./kernel/kernel.module').then(m => m.KernelModule)
  }, {
    path: 'persona',
    loadChildren: () => import('./persona/persona.module').then(m => m.PersonaModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
