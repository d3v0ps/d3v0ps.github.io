import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Typewriter from 'typewriter-effect/dist/core';
import GraphemeSplitter from 'grapheme-splitter';
import anime from 'animejs/lib/anime.es.js';

import { ArrowComponent } from './arrow.component';
import { ContactService } from '../services/contact.service';
import { from, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-contact',
  template: `
    <div class="content">
      <div class="row">
        <div class="col col-12 col-prev-arrow" (click)="prev.emit()">
          <app-arrow #prevArrow direction="up"></app-arrow>
        </div>
        <div class="col col-12">
          <div class="typewriter-wrapper">
            <div id="contactTypewriter" class="typewriter"></div>
          </div>
        </div>
        <div class="col col-12" id="contactFormWrapper">
          <form [formGroup]="form" (ngSubmit)="onSubmit(form.value)">
              <div class="form-group">
                <label for="Email">Email</label>
                <input type="email" class="form-control" name="email" aria-describedby="emailHelp" placeholder="Enter email" formControlName="email">
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div class="form-group">
                <label for="fullname">Full Name</label>
                <input type="text" class="form-control" name="fullName" placeholder="Full Name" formControlName="fullName">
              </div>
              <div class="form-group">
                <label for="comments">Comments</label>
                <textarea class="form-control" formControlName="comments" name="comments">
              </textarea>
              </div>
              <button type="submit" class="btn btn-primary" [disabled]="!form.valid">Submit</button>
            </form>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .content {
      width: 60vw;
      height: 100vh;
      margin: 0 auto;
      padding-top: 10%;
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

    #contactFormWrapper {
      display: none;
      opacity: 0;
    }

    .col-prev-arrow {
      margin-bottom: 5em;
    }

    @media (max-width: 1400px) {
      .content {
        width: 90vw;
      }

      .typewriter {
        font-size: 20px;
      }
    }

    @media (max-width: 900px) {
      .content {
        padding-top: 150px;
      }
    }
  `]
})

export class ContactComponent implements OnInit {

  @Output() prev = new EventEmitter<void>();

  @ViewChild('prevArrow', { static: true }) prevArrow: ArrowComponent;

  form = new FormGroup({
    fullName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
    comments: new FormControl('', [Validators.required])
  });

  private typewriter = null;
  private animationStarted = false;

  constructor(
    private contactService: ContactService
  ) {}

  ngOnInit(): void {
    // this.glide.mount();
    this.initializeTypewriter();
  }

  startAnimation(): void {
    if (this.animationStarted) {
      return;
    }
    this.animationStarted = true;

    this.initializeTypewriter()
      .pauseFor(1000)
      .typeString(`Connect with me today.`)
      .callFunction(() => {
        this.showContactForm()
          .pipe(
            switchMap(() => this.prevArrow.show())
          )
          .subscribe();
      })
      .start();
  }

  onSubmit(value: any): void {
    console.log(value);
    this.contactService.sendMessage(value)
      .subscribe(
        response => {
          console.log(response);
          location.href = 'https://mailthis.to/confirm';
        },
        error => {
          console.warn(error.responseText);
          console.log({ error });
        }
      );
  }

  private initializeTypewriter(): any {
    this.typewriter = this.typewriter || new Typewriter(`#contactTypewriter`, {
      loop: false,
      delay: 50,
      stringSplitter: (text) => {
        const splitter = new GraphemeSplitter();
        return splitter.splitGraphemes(text);
      }
    });

    return this.typewriter;
  }

  private showContactForm(): Observable<void> {
    const animation = anime({
      targets: `#contactFormWrapper`,
      opacity: 1,
      easing: 'easeInOutSine',
      duration: 2000,
      begin: () => {
        document.querySelector<HTMLElement>(`#contactFormWrapper`).style.display = 'block';
      },
    });

    return from(animation.finished as Promise<void>);
  }
}
