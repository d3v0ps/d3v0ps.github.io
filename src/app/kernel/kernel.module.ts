import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ScullyLibModule} from '@scullyio/ng-lib';
import {KernelRoutingModule} from './kernel-routing.module';
import {KernelComponent} from './kernel.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [KernelComponent],
  imports: [CommonModule, KernelRoutingModule, ScullyLibModule, SharedModule],
})
export class KernelModule {}
