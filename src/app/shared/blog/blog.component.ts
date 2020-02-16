
import { Component, OnInit, Input } from '@angular/core';
import { ScullyRoutesService } from '@scullyio/ng-lib';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-blog',
  template: `
    <nav class="navbar navbar-dark bg-dark justify-content-between">
      <a class="navbar-brand">{{ title }}</a>
    </nav>

    <div class="container-fluid my-4">
      <div class="row">

        <div class="col-md-3 col-12 mb-2">
          <app-links-list [blog]="blog"></app-links-list>
        </div>

        <div class="col">
          <div class="card article p-4">
            <scully-content></scully-content>
          </div>
        </div>

      </div>
    </div>
  `,
  styles: [
    `
      ::slotted(h1)  {
        color:rgb(51, 6, 37);
        background-color: rgb(248, 211, 236);
        padding: 5px;
        border-radius: 5px;
        width: fit-content;
      }
    `
  ]
})

export class BlogComponent implements OnInit {

  @Input() title = '';
  @Input() blog = '';

  constructor(
    private scully: ScullyRoutesService,
    private titleService: Title
  ) {}

  ngOnInit() {
    this.scully.getCurrent().subscribe(
      data => this.titleService.setTitle(`d3v0ps | ${data.title}`)
    );
  }
}
