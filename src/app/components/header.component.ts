
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <div class="header clearfix">
      <ul class="menu float-left">
        <li class="menu-item" (click)="sectionClick.emit('welcome')"
          [ngClass]="{
            'active': activeSection === 'welcome'
          }">
          Welcome
        </li>
        <li class="menu-item" (click)="sectionClick.emit('work')"
          [ngClass]="{
            'active': activeSection === 'work'
          }">
          Work
        </li>
        <li class="menu-item" (click)="sectionClick.emit('contact')"
          [ngClass]="{
            'active': activeSection === 'contact'
          }">
          Contact
        </li>
        <li class="menu-item">
          <a href="blog">
            Blog
          </a>
        </li>
      </ul>
      <ul class="menu float-right">
        <a class="menu-item menu-item-icon" href="https://instagram.com/aitor93" target="blank">
          <i class="ri-instagram-fill"></i>
        </a>
        <a class="menu-item menu-item-icon" href="https://github.com/d3v0ps" target="blank">
          <i class="ri-github-fill"></i>
        </a>
      </ul>
    </div>
  `,
  styles: [`
    .header {
      position: fixed;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.2);
    }

    .menu {
      padding: 0px;
      margin: 0;
      display: flex;
      flex-wrap: wrap;
    }

    .menu-item {
      display: list-item;
      list-style-type: none;
      padding: 1em 2em;
      cursor: pointer;
    }

    .menu-item.menu-item-icon {
      padding: 0.5em 1em;
    }

    .menu-item.menu-item-icon > i {
      font-size: 1.5rem;
    }

    .menu-item.active {
      text-decoration: underline;
      color: #706fd3;
      font-weight: 700;
    }
  `]
})
export class HeaderComponent {

  @Input() activeSection: string = null;

  @Output() sectionClick = new EventEmitter<string>();
}
