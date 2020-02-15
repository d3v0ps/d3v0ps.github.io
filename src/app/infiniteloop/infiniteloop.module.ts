import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ScullyLibModule} from '@scullyio/ng-lib';
import {InfiniteloopRoutingModule} from './infiniteloop-routing.module';
import {InfiniteloopComponent} from './infiniteloop.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [InfiniteloopComponent],
  imports: [CommonModule, InfiniteloopRoutingModule, ScullyLibModule, SharedModule],
})
export class InfiniteloopModule {}
