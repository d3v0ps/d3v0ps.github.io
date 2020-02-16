import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-creativeworks',
  template: `
    <app-blog [title]="title" [blog]="blog"></app-blog>
  `,
})
export class CreativeworksComponent implements OnInit {

  title = 'Trabajos';
  blog = 'creativeworks';

  ngOnInit() {}

  constructor(private router: Router, private route: ActivatedRoute) {
  }
}
