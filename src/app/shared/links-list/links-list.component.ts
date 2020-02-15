
import { Component, OnInit, Input } from '@angular/core';
import { ScullyRoutesService } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import getSortedLinks from 'src/app/core/get-sorted-links';

@Component({
  selector: 'app-links-list',
  template: `
    <div class="list-group card">
      <a *ngFor="let link of links$ | async" [href]="link.route" class="list-group-item list-group-item-action">{{ link.title }}</a>
    </div>
  `
})

export class LinksListComponent implements OnInit {

  @Input() blog = '';

  links$: Observable<any> = null;

  constructor(private scully: ScullyRoutesService) { }

  ngOnInit() {
    this.links$ = this.scully.available$.pipe(
      map((links: Array<any>) => getSortedLinks(links, this.blog))
    );
  }
}
