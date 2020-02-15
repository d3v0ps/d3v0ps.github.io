import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ScullyLibModule} from '@scullyio/ng-lib';
import {AtlasRoutingModule} from './atlas-routing.module';
import {AtlasComponent} from './atlas.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [AtlasComponent],
  imports: [CommonModule, AtlasRoutingModule, ScullyLibModule, SharedModule],
})
export class AtlasModule {}
