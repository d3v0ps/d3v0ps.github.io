import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ScullyLibModule} from '@scullyio/ng-lib';
import {PersonaRoutingModule} from './persona-routing.module';
import {PersonaComponent} from './persona.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PersonaComponent],
  imports: [CommonModule, PersonaRoutingModule, ScullyLibModule, SharedModule],
})
export class PersonaModule {}
