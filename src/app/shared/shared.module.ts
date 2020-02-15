import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinksListComponent } from './links-list/links-list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [LinksListComponent],
  exports: [LinksListComponent]
})
export class SharedModule {

}
