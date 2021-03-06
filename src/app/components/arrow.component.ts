
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import anime from 'animejs/lib/anime.es.js';
import { from, Observable, of, Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'app-arrow',
  template: `
    <div [id]="id" class="arrow-wrapper">
      <i class="ri-arrow-{{ direction }}-s-line"></i>
    </div>
  `,
  styles: [`
    .arrow-wrapper {
      display: none;
      opacity: 0;
      text-align: center;
      font-size: 40px;
      cursor: pointer;
    }

    .blinker {
      animation: blinker 1s linear infinite;
    }

    @keyframes blinker {
      50% {
        opacity: 0;
      }
    }
  `]
})
export class ArrowComponent implements OnInit, OnDestroy {

  @Input() showAtStart = true;
  @Input() direction = 'down';

  readonly id = 'arrow_' + Math.random().toString(36).substr(2, 9);

  private shown = false;

  private destroy$ = new Subject();

  ngOnInit(): void {
    if (!this.showAtStart) {
      return;
    }

    setTimeout(() => this.show().subscribe(), 100);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  show(): Observable<void> {
    if (this.shown) {
      return of(null);
    }

    this.shown = true;

    const animation = anime({
      targets: `#${this.id}`,
      opacity: 1,
      easing: 'easeInOutSine',
      duration: 2000,
      begin: () => {
        document.querySelector<HTMLElement>(`#${this.id}`).style.display = 'block';
      },
    });

    return from(animation.finished as Promise<void>)
      .pipe(
        takeUntil(this.destroy$),
        tap(() => document.querySelector<HTMLElement>(`#${this.id}`).classList.add('blinker'))
      );
  }

}
