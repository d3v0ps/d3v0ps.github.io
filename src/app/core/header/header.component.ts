
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">

      <a class="navbar-brand" href="#">
        <img style="border-radius: 5px;" src="assets/pictures/skull-purple.png" width="30" height="30"
          class="d-inline-block align-top" alt="">
      </a>

      <button class="navbar-toggler" type="button" data-toggle="collapse"
        data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item" [routerLinkActive]="'active'" *ngFor="let link of links">
            <a *ngIf="!link.isSpecial; else specialLink" href="{{ link.slug }}">
              {{ link.label }}
            </a>
            <ng-template #specialLink>
              <a [routerLink]="[link.slug]">
                {{ link.label }}
              </a>
            </ng-template>
          </li>
        </ul>
      </div>

    </nav>
  `
})

export class HeaderComponent {
  title = 'personal-site';

  links = [
    {
      slug: '/',
      label: 'Home',
      isSpecial: true,
    },
    {
      slug: 'infiniteloop/angular-reviews',
      label: 'In Finite Loop'
    },
    {
      slug: 'kernel/index',
      label: 'Kernel'
    },
    // {
    //   slug: 'atlas/index',
    //   label: 'Atlas'
    // },
    {
      slug: 'lists/software',
      label: 'Lists'
    },
    {
      slug: 'creativeworks/oss',
      label: 'Creative Works'
    },
    {
      slug: 'persona/sobre-mi',
      label: 'Persona'
    }
  ];
}
