import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ScullyLibModule} from '@scullyio/ng-lib';
import {CreativeworksRoutingModule} from './creativeworks-routing.module';
import {CreativeworksComponent} from './creativeworks.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CreativeworksComponent],
  imports: [CommonModule, CreativeworksRoutingModule, ScullyLibModule, SharedModule],
})
export class CreativeworksModule {}
