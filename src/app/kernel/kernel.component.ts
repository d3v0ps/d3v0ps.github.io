import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router, ROUTES} from '@angular/router';

@Component({
  selector: 'app-kernel',
  template: `
    <app-blog [title]="title" [blog]="blog"></app-blog>
  `
})
export class KernelComponent implements OnInit {

  title = 'Blog Personal';
  blog = 'kernel';

  ngOnInit() {}

  constructor(private router: Router, private route: ActivatedRoute) {
  }
}
