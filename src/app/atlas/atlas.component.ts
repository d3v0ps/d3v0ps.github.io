import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-atlas',
  template: `
    <app-blog [title]="title" [blog]="blog"></app-blog>
  `
})
export class AtlasComponent implements OnInit {

  title = 'Atlas';
  blog = 'atlas';

  ngOnInit() {}

  constructor(private router: Router, private route: ActivatedRoute) {
  }
}
