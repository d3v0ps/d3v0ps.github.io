import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persona',
  template: `
    <app-blog [title]="title" [blog]="blog"></app-blog>
  `
})
export class PersonaComponent implements OnInit {

  title = 'Información Personal';
  blog = 'persona';

  ngOnInit() {}
}
