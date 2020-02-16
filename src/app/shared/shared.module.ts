import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinksListComponent } from './links-list/links-list.component';
import { BlogComponent } from './blog/blog.component';
import { ScullyLibModule } from '@scullyio/ng-lib';

@NgModule({
  imports: [CommonModule, ScullyLibModule],
  declarations: [LinksListComponent, BlogComponent],
  exports: [LinksListComponent, BlogComponent]
})
export class SharedModule {

}
