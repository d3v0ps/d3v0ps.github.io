import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ScullyLibModule} from '@scullyio/ng-lib';
import {ListsRoutingModule} from './lists-routing.module';
import {ListsComponent} from './lists.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ListsComponent],
  imports: [CommonModule, ListsRoutingModule, ScullyLibModule, SharedModule],
})
export class ListsModule {}
