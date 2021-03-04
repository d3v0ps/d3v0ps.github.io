
import { Component, OnInit } from '@angular/core';
import Typewriter from 'typewriter-effect/dist/core';
import GraphemeSplitter from 'grapheme-splitter';
import anime from 'animejs/lib/anime.es.js';
import { from, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  template: `
    <div class="video-wrap">
      <video class="video"
        [src]="'assets/videos/wormhole.mp4'"
        onloadedmetadata="this.muted = true; this.play()"
        playsinline autoplay muted loop>
        Your browser does not support HTML5 video.
      </video>
    </div>
    <div class="container">
      <app-header></app-header>
      <div class="content">
        <div class="row">
          <div class="col col-8">
            <div class="typewriter-wrapper">
              <div id="typewriter" class="typewriter"></div>
              <div class="info">
                <div id="workInfo">
                  I'm a <a [routerLink]="'work'">Software Developer</a>
                </div>
                <div id="likesInfo">
                  I love watching
                    <a [routerLink]="['my-lists', 'movies']">movies 🎬</a>,
                    <a [routerLink]="['my-lists', 'tv-series']">TV shows 📺</a>,
                    listening
                    <a [routerLink]="['my-lists', 'music']">music 🎧</a>
                    and reading
                    <a [routerLink]="['my-lists', 'books']">books 📖</a>
                </div>
                <div id="videogamesInfo">
                  Also I like playing <a [routerLink]="['my-lists', 'videogames']">videogames 🎮</a>
                </div>
                <div id="socialButtons" class="social-buttons">
                  <a href="https://instagram.com/aitor93" target="blank">
                    <i class="ri-instagram-fill"></i>
                  </a>
                  <a href="https://github.com/d3v0ps" target="blank">
                    <i class="ri-github-fill"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col col-4">
            <div id="profileWrapper" class="profile-wrapper">
              <img class="profile-picture" src="assets/images/profile.jpg">
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .video-wrap {
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }

    .video {
      position: absolute;
      top: -9999px;
      bottom: -9999px;
      left: -9999px;
      right: -9999px;
      margin: auto;
      min-width: 100%;
      min-height: 100%;
      width: auto;
      height: auto;
    }

    .container {
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      max-width: 100%;
      padding: 0;
    }

    .content {
      width: 60%;
      margin: 0 auto;
      margin-top: 3em;
    }

    .typewriter-wrapper {
      background-color: rgba(0, 0, 0, 0.8);
      text-align: center;
      padding: 2em 2em 0 2em;
    }

    .typewriter, .info {
      font-size: 40px;
      white-space: pre-line;
    }

    .typewriter {
      margin-bottom: 0.5em;
    }

    #workInfo, #likesInfo, #videogamesInfo, #socialButtons  {
      display: none;
      opacity: 0;
      margin-bottom: 0.5em;
    }

    #socialButtons {
      position: relative;
      bottom: 0;
      margin-bottom: 0;
    }

    .profile-wrapper {
      position: fixed;
      top: -200px;
    }

    .profile-picture {
      width: 200px;
      border-radius: 100px;
    }

    .social-buttons > a {
      text-decoration: none;
      padding: 0.3em;
    }
  `]
})
export class HomePage implements OnInit {

  private typeWriter = null;

  ngOnInit(): void {
    this.typeWriter = new Typewriter(`#typewriter`, {
      loop: false,
      stringSplitter: this.stringSplitter
    });

    this.stepOne();
  }

  private stringSplitter = (text) => {
    const splitter = new GraphemeSplitter();
    return splitter.splitGraphemes(text);
  }

  private stepOne(): void {
    this.typeWriter
      .pauseFor(1000)
      .typeString('Hi! Welcome to my site 🤗 \n')
      .pauseFor(300)
      .typeString('My name is Aitor')
      .callFunction(() => this.stepTwo())
      .start();
  }

  private stepTwo(): void {
    this.showProfilePicture()
      .pipe(
        switchMap(() => this.showHiddenElement('#workInfo')),
        switchMap(() => this.showHiddenElement('#likesInfo')),
        switchMap(() => this.showHiddenElement('#videogamesInfo')),
        switchMap(() => this.showHiddenElement('#socialButtons')),
      )
      .subscribe();
  }

  private showProfilePicture(): Observable<void> {
    const animation = anime({
      targets: '#profileWrapper',
      translateY: 'calc(300px + 3em)',
      rotate: '2turn',
      easing: 'easeInOutSine',
      duration: 800,
    });

    return from(animation.finished as Promise<void>);
  }

  private showHiddenElement(elementSelector: string): Observable<void> {
    const animation = anime({
      targets: elementSelector,
      opacity: 1,
      easing: 'easeInOutSine',
      duration: 2000,
      begin: () => {
        document.querySelector<HTMLElement>(elementSelector).style.display = 'block';
      },
    });

    return from(animation.finished as Promise<void>);

  }
}
