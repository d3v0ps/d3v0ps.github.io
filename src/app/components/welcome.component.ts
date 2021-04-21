
import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import Typewriter from 'typewriter-effect/dist/core';
import GraphemeSplitter from 'grapheme-splitter';
import anime from 'animejs/lib/anime.es.js';
import { from, Observable } from 'rxjs';
import { ArrowComponent } from './arrow.component';
import { switchMap } from 'rxjs/operators';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-welcome',
  template: `
    <div class="content">
      <div class="row">
        <div class="col col-lg-8 col-12">
          <div class="typewriter-wrapper">
            <div id="welcomeTypewriter" class="typewriter"></div>
          </div>
        </div>
        <div class="col col-lg-4 col-12 col-profile">
          <div id="profileWrapper" class="profile-wrapper">
            <img class="profile-picture" src="assets/images/profile.jpg">
          </div>
        </div>
        <div class="col col-12 col-arrow" (click)="next.emit()">
          <app-arrow #nextArrow></app-arrow>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .content {
      width: 80vw;
      height: 100vh;
      margin: 0 auto;
      padding-top: 100px;
      overflow: hidden;
    }

    .typewriter-wrapper {
      text-align: center;
    }

    .typewriter {
      font-size: 40px;
      white-space: pre-line;
      margin-bottom: 0.5em;
    }

    .col-profile {
      min-height: 200px;
    }

    .profile-wrapper {
      position: absolute;
      right: -200px;
    }

    .profile-picture {
      width: 200px;
      border-radius: 100px;
    }

    .col-arrow {
      margin-top: 5em;
    }

    @media (max-width: 1400px) {
      .content {
        width: 100vw;
      }

      .typewriter {
        font-size: 20px;
      }
    }

    @media (max-width: 900px) {
      .content {
        padding-top: 200px;
      }
    }
  `]
})
export class WelcomeComponent implements OnInit {

  @Output() next = new EventEmitter<void>();

  @ViewChild('nextArrow', { static: true }) nextArrow: ArrowComponent;

  private typewriter = null;
  private animationStarted = false;

  constructor(
    private breakpointObserver: BreakpointObserver
  ) { }

  ngOnInit(): void {
    this.initializeTypewriter();
  }

  startAnimation(): void {
    if (this.animationStarted) {
      return;
    }
    this.animationStarted = true;

    this.initializeTypewriter()
      .pauseFor(1000)
      .typeString('Hi! Welcome to my site 🤗 \n')
      .pauseFor(300)
      .typeString('My name is Aitor')
      .callFunction(() => {
        this.showProfilePicture()
          .pipe(
            switchMap(() => this.nextArrow.show())
          )
          .subscribe();
      })
      .start();
  }

  private initializeTypewriter(): any {
    this.typewriter = this.typewriter || new Typewriter(`#welcomeTypewriter`, {
      loop: false,
      delay: 50,
      stringSplitter: (text) => {
        const splitter = new GraphemeSplitter();
        return splitter.splitGraphemes(text);
      }
    });

    return this.typewriter;
  }

  private showProfilePicture(): Observable<void> {
    const isSmallScreen = this.breakpointObserver.isMatched('(max-width: 991px)');

    const animation = anime({
      targets: '#profileWrapper',
      translateX: isSmallScreen ? 'calc(-200px + -50%)' : 'calc(-200px + -20vw)',
      rotate: '2turn',
      easing: 'easeInOutSine',
      duration: 800,
    });

    return from(animation.finished as Promise<void>);
  }
}
