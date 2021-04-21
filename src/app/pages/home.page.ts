
import { Component, OnInit, ViewChild } from '@angular/core';

import Pageable from 'src/app/core/pageable';

import { WelcomeComponent } from '../components/welcome.component';
import { WorkComponent } from '../components/work.component';
import { ContactComponent } from '../components/contact.component';

@Component({
  selector: 'app-home',
  template: `
    <app-header [activeSection]="activeSection" (sectionClick)="showSectionByAnchor($event)"></app-header>
    <div id="container">
      <div class="section section-welcome" data-anchor="Welcome">
        <app-welcome #welcomeSection (next)="showSectionByAnchor('work')"></app-welcome>
      </div>
      <div class="section section-work" data-anchor="Work">
        <app-work #workSection  (prev)="showSectionByAnchor('welcome')" (next)="showSectionByAnchor('contact')"></app-work>
      </div>
      <div class="section section-contact" data-anchor="Contact">
        <app-contact #contactSection  (prev)="showSectionByAnchor('work')"></app-contact>
      </div>
    </div>
  `,
  styles: [`
    .section-welcome {
      background-image: url('assets/images/backgrounds/webb-dark.png');
      background-attachment: fixed;
    }

    .section-work {
      background-image: url('assets/images/backgrounds/wild_oliva.png');
      background-attachment: fixed;
    }

    .section-contact {
      background-image: url('assets/images/backgrounds/dark_embroidery.png');
      background-attachment: fixed;
    }
  `]
})
export class HomePage implements OnInit {

  @ViewChild('welcomeSection', { static: true }) welcomeSection: WelcomeComponent;
  @ViewChild('workSection', { static: true }) workSection: WorkComponent;
  @ViewChild('contactSection', { static: true }) contactSection: ContactComponent;

  activeSection = null;

  private pages = null;
  private isFirstFinishEvent = true;

  ngOnInit(): void {
    this.pages = new Pageable('#container', {
      onInit: (data) => this.startSection(data.index),
      onFinish: (data) => {
        if (this.isFirstFinishEvent) {
          this.isFirstFinishEvent = false;
          return;
        }

        this.startSection(data.index);
      }
    });
  }

  showSectionByAnchor(anchor: string): void {
    this.pages.scrollToAnchor(`#${anchor}`);
  }

  private startSection(sectionIndex: number): void {
    switch (sectionIndex) {
      case 0:
        this.activeSection = 'welcome';
        this.welcomeSection.startAnimation();
        break;
      case 1:
        this.activeSection = 'work';
        this.workSection.startAnimation();
        break;
      case 2:
        this.activeSection = 'contact';
        this.contactSection.startAnimation();
        break;
      default:
        break;
    }
  }
}
