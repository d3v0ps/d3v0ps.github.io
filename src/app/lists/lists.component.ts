import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router, ROUTES} from '@angular/router';

@Component({
  selector: 'app-lists',
  template: `
    <app-blog [title]="title" [blog]="blog"></app-blog>
  `,
})
export class ListsComponent implements OnInit {

  title = 'Listas de Recomendaciones';
  blog = 'lists';

  ngOnInit() {}

  constructor(private router: Router, private route: ActivatedRoute) {
  }
}
