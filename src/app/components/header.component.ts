
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <div class="header">
      <ul class="menu">
        <li class="menu-item">
          <a [routerLink]="'home'">Home</a>
        </li>
        <li class="menu-item">
          <a [routerLink]="'work'">Work</a>
        </li>
        <li class="menu-item">
          <a [routerLink]="'my-lists'">My Lists</a>
        </li>
      </ul>
    </div>
  `,
  styles: [`
    .header {
      height: 100px;
      background-color: rgba(255, 255, 255, 0.8);
    }

    .menu {
      padding: 0px;
      margin: 0;
    }
  `]
})
export class HeaderComponent {
  constructor() { }
}
