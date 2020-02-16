import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router, ROUTES} from '@angular/router';

@Component({
  selector: 'app-infiniteloop',
  template: `
    <app-blog [title]="title" [blog]="blog"></app-blog>
  `
})
export class InfiniteloopComponent implements OnInit {

  title = 'Blog sobre desarrollo de Software';
  blog = 'infiniteloop';

  ngOnInit() {}

  constructor(private router: Router, private route: ActivatedRoute) {
  }
}
