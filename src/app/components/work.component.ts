
import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import Typewriter from 'typewriter-effect/dist/core';
import GraphemeSplitter from 'grapheme-splitter';
import anime from 'animejs/lib/anime.es.js';
import { SwiperComponent } from 'swiper/angular';
import { forkJoin, from, Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

import { ArrowComponent } from './arrow.component';

@Component({
  selector: 'app-work',
  template: `
    <div class="content">
      <div class="row">
        <div class="col col-12 col-prev-arrow" (click)="prev.emit()">
          <app-arrow #prevArrow direction="up"></app-arrow>
        </div>
        <div class="col col-12">
          <div class="typewriter-wrapper">
            <div id="workTypewriter" class="typewriter"></div>
          </div>
        </div>

        <div class="col col-12 col-technologies" id="workTechnologiesWrapper">
          <swiper #workTechnologiesSwiper
            [config]="{
              init: false
            }"
            [slidesPerView]="isSmallScreen ? 2 : 4"
            [spaceBetween]="25"
            [autoplay]="true"
            [loop]="true"
            [pagination]="{ clickable: true }"
          >
            <ng-template swiperSlide *ngFor="let technology of technologies">
              <img [src]="technology.logo" width="90" height="90"><br/>
              {{ technology.name }}
            </ng-template>
          </swiper>
        </div>

        <div class="col col-12 col-next-arrow" (click)="next.emit()">
          <app-arrow #nextArrow></app-arrow>
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

    .col-technologies {
      margin-top: 5em;
    }

    .col-prev-arrow {
      margin-bottom: 5em;
    }

    .col-next-arrow {
      margin-top: 5em;
    }

    #workTechnologiesWrapper {
      display: none;
      opacity: 0;
    }

    ::ng-deep .swiper-slide {
      text-align: center;
      margin-bottom: 3em;
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
        padding-top: 150px;
      }
    }
  `]
})
export class WorkComponent implements OnInit {

  @Output() prev = new EventEmitter<void>();
  @Output() next = new EventEmitter<void>();

  @ViewChild('prevArrow', { static: true }) prevArrow: ArrowComponent;
  @ViewChild('nextArrow', { static: true }) nextArrow: ArrowComponent;
  @ViewChild('workTechnologiesSwiper', { static: true }) workTechnologiesSwiper: SwiperComponent;

  isSmallScreen = false;

  technologies = [
    {
      name: 'TypeScript',
      logo: 'assets/images/tech-logos/typescript.svg',
    },
    {
      name: 'Angular',
      logo: 'assets/images/tech-logos/angular.svg',
    },
    {
      name: 'SASS',
      logo: 'assets/images/tech-logos/sass.svg',
    },
    {
      name: 'Node.js',
      logo: 'assets/images/tech-logos/nodejs.svg',
    },
    {
      name: 'NestJS',
      logo: 'assets/images/tech-logos/nestjs.svg',
    },
    {
      name: 'Jest',
      logo: 'assets/images/tech-logos/jest.svg',
    },
    {
      name: 'Puppeteer',
      logo: 'assets/images/tech-logos/puppeteer.svg',
    }
  ];

  private company = {
    url: `https://colba.es/`,
    logo: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACBCAYAAAB6iIfxAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAFhVJREFUeJztnQnYXdO5xyuTOZIgCWoeEoTSCopb7iBXH0paYw0NGnqpR/VSWlpZNcTU9uY+uELc+tLilpqLupQoDR6tIDFG5ZZIiCEJ+USCeO//9e6vzvd9++z97nHtfc77e57/Q5Jz1rCH/1l77Xe963OfMwzDMAzDMIxEuAceXhUaDm0ObQ1tC20DbQl9HloLWsl3Ow3DaFMCIzoeugOaA70DfQCtgAj6BPoQehd6DXoUOgfaBernu/2GYbQ4MJoB0J7QzdDHgTGl0V+hY6AhvvtkGEYLAnMZBv0mGDWlNaqemsUG6LtvhmG0EDCVkdCrORpVo9gAT7Q5LsMwMgMjWT94hCvCrLq0FDrCd18Nw6gxPOqB7inYrLq0BBrqu8+GYdQUGMgeTt72lWFYrKt999kwjBoC8+gL3VeiWbHegzbz3XfDMGqGkzirxSUbFutk3303DKNmOIm3KtusWL/z3XfDMGoGjONbngxrlu++G4ZRM/jRzJNhzfXdd8MwagaM4xRPhjXPd98Nw6gZZliGYdQGMyzDMGqDGZZhGLXBo2G95rvvhmHUDI+GtdB33w3DKAnc8P2hwdB60AZOUhcPcgmzfOLz4z0ZFmvzhG1dBVrbSWYJ7jPn7hroLGWNYVQP3JjrQGdAd0Iv8jyQk5TFi4L/8p+fh24LRk6xmT7xmX08Gtavob4x7ePc8RdCDzpJf/MGj86CPr8FzYWehK6FDoRWzu+IG4aRGNyEW0BTnCwaTmIInMrlSh59RZS9GfS+J8Pi9MsXQKuGtGunwJhXJCyT886fDq1V7FkxDKMXuPF2g15w2dK/PA2NblI+529/zJNhUWBI90Pfhw6AjoQmQ29mNMJboY3LPl+G0bbghtsE+ltOxsAjjw2b1HO4R8MqUr93MY+chmHkgJMsoLflfANfAQ0IqYsns2dVwGDyFo9KT/Rx/gyjrcCN9iWXfP4mTjwHtmOT+vjRc1FJRrIAmu/KyXL6jAuZIzMMI0dwk11W0A18WkSd+xdoWh9BN0HbNdTHyQMvd7I5RVGGxfV+oZyzZhhtCm6yaQXdwL+MqZfzuz+Xc508sjsV6tOkzvEFm9ZxhZwkwzAE3GQzC7p571DUzQGp5zuZqM/y2MZGxbtHb6+o85oCDevcfM6KYRih4CZ7tqCb964EbVjLyWPiLdBrCUzqYSexUBzjpYpCx+fGFGhYl6Q/E4ZhxFIFwwppExvYKOifoK9BY53ETrHZcKDn+lqDCimbg2OXmGEZRg2pomEVCdo1AvrADMswakgbGtZIaHlBfb7Yd/8Mo6XBTfZUQTfvrb77FoaTR8KkayW1muC7f4bR0vBIqKCb9zLffQvDSaqY5wvq86G++2cYLQ2PCgq6eb/tu29hoF39oOsL6G+nS5h3yzCMhDhZ+Jz3JPT8Kt+8rphF2NNdwqSGhmGkADfaJJfveruzXJNo8yqAtq0BzcixvzyJv5/vfhlGW+Ak7imvG3gatKbvPsWBNo6G3s6hv5wT61Lf/WlniGhX6KqcNCyH9oxV1HNQHn1vW5ys7cuStYFv3BtdjTJwoq3bO1malHZ0yW8bnatgLizcECtB/aDKtS1v0MejKD+2zKE95yvqsRCYrDjJ357mxuVc59+o4o0bB48GneSvX5Cgv8uc5BDb0VXk0Rc3wIbQYdAk6D7oGehF6HnoL9AN0Okko5FVfLc3T8yw2hTcfA80uUF55PWqkxTKHGj6qJMULme7hjQudcbJ28N9+fHOSQZRfkR+Pugz57ridYu8mQVvurGe7/YyuOhXh/aHHoRWJLgp34DOg0ZCtd8JiMyw2hMXPo/Fj0y84w1vc9XXtdFWV0F/+1WxzyQjpaehTzLcnItJjKt2I+NGyAyr/cBNuamTJHSNZsWv6m07qwpBMi/loI9zvEkfoRwmm31BZljtRTCKuL2HWS2GtvLdNuMzcJEPgC6gbKOqZsyEKv92Nwwyw2ofnOziPCXkDeG0Kj4KtTO4yL9HyeaqknIT1GvzkKqDNm8L/UChtxTHwAzLFzCcIU5ySJ0A/RS6CLoYmhj8eaprvr1XZIpjo1xwge+mvOGywI+Z3/Td16JA32YrjoEZVlnAZFaDDmazcbLdepa4qht998cQSGKqHk5gPPOhO6HroVtJQhu0LIDW9t3nIiAzrGoQGNWRwST5hxlMqlGzoTV898349AY4gHSPgvOgU6FNof7Bd/tCw6BvQs8pymBO8t3nIiAzLP842cLquhyNqjH2qiUv3DoRGM4DihtgKfSPMWVtDv1VUdZ0qDYrFrSQGZZfglCEP+RsVI16F9rPJt/9wTcQ9F7Mxc9vDX+oLO9Q6P2Y8j6E/qHovpUNmWH5AybSx0lEdlFm1SVeILyz7/62K2xEiouf552GKsvrD/2vosyzMrZ7MPQV6OigD+cFN/IE6GSSx9ytodKWNlENDAt/PwgaExyjc4KyzoQOpwJXJqDcVaAdoYODus8O6mb9BPpucM62gpKnUXKyvVXRZtWll6Dave5uBXBx/Flx8V+RsMxjI8paBs2BXIq2Dg4ueDbEjxTtZl4LbortUt0IydpXWcPCn4dCF5KsPoiCH9cPohzWg6KMtUhM6DpoiaLNXfAPJMcDssHF/+A4SQfTLByhKB2W9QAZySAJFP1QcQHtk7DcEdC7Dd/ncIm7oRNJRj2rJSyPo+/ZqF5NcNH3hOfgroU2THaUErWzkoaF/x8FvZTgWPEUwC3Q8JTt47fOHGyrmc+MYjn0a2jdyAphHl8v2axYjznLqFkquBC2V144iW5yfH41kl/ICVCmx32SkUFHxgu/Ef715kei3B99qIKGRZJl482Ux+pP0AYJ27YBSeaOPOER+aimlTrJO1W2YfHmoxtlPJdGAnARHKK4WDjY08viZZJHisdyvvgZHm2NK6C9lTIsaFVKFl8Xxt0J2sXhLS9nrK8ZbFrbhFbsJCi0bMNi7ZX1ZBp6cAFMVFwoCzy1bR2SRdNFwXFnR+fc5qoZ1tFZDlADpyratDbp4/DSwuE3q/aqHMbxvifDOjzryTT04OTfrLhI5nhq2y+pmEXYjbwN5bYAn6plWP9J2eb8GvkbNDimTf+eU11R8IuW7/Sq3JNZsY7LejINPTj5jysuktke2rU76dLb8ChpBnQKtDdJmANPzv83xb8N6+J+ymk+i6plWI1wnN0TJHOBV0B3kJhQkhRCx8e0icMlosJZ+O0wH+tjoJ2hLUhiAPlc/5T05srzagO7VW6G1fqQvHl7UXGBlGpYqK9PcGHH0UkRr9/x95tBNyrKYdPbKae2V82w2JA4pfUm1GMeEn8eCH2VJOxDw+OKdnGG2rAJd55H44SQTUMUSF4O/F7RDn6r3f1FjhlW60PyJm+O4gIp27A49uaDmDbxv/+zoiwOYtWY3+2UQ4ApVc+wOMd+5OiRZF2oZqKcjX0dRds4VOZM+mxtKo92Byn7tTHFn3vmhG5fNMNqfXDS14ReUVwcZRvWJEWbppLyzSVJ6Ebc0qNF0OdzaHuVDIszaKiCsfG5/RTlMap4PJL1qTynxbFcidaM4vO/VbTjom5fMsNqfUgMSzNvULZhaR5T1bFdJI+YDynK3DeHtlfJsK5OUB4fo7mKMl2CMjl4tPcbvfjvaSbvp3T7khlW60MVHGGRzKvETQRz9HOifQDw+V8o+jkhh/ZXybAuSVjm/yjK/F3WtivaEbWsq4uObl9y2RLzZdGxRR8QQ6AKzmGhri8q2vNKinJPUJR7Vw7tr5JhJcrWQLpF8LwXZaFBxKSLHevo9iUYx1ueDGtskQfD+AySt4QvKC6OMg1rrKI9z6Yo9zBFuYmNMKSeOhvWeEWZHAqxesJy+XGTl1fxXCLvcXk8Sf77CSS7M/XUrYp2dHSrBMbxuAez4lHdjkkOhpENqlgcFur6N0V7ijIsDkrMFI9F9TasbyvK5NTYkQGkDeXxCJ6z0E4jWcuY57ZxHd0qg3H83INhvQ61ZK7vqkKyi00cpUW6k/zyxlGUYTGZ9sik1jcsXjgemTmBJO8VJ3F8Q1FeWjq6VQrj+AK0vGTD+pWzzKOlQroL/80S2+PbsBK/1epRT6sbFo+UmhoW/m1lks1JitwqjunoVrGTbKP3lWhWHzvbVLV0SJaxxFFatgbUc5KiPUUZFq9bzBQ8Sq1vWK9DQ5p8n0dWdynKyIOOXg2AgWwHLS3JsK5Kd+qMLJA+H1aitD8k8xecLeBckrViqpEz6Qy0KMN6PWm5IfW0umFxGEzo7t0kCfs0I6t3oMkkKZGPhI7oocmKMjpCOwEjOc3lv1tOTz3kbLsvL5Aso1iuuEC+mrDcnhlHF0L3kuwszdkvQ883ibnF8XKKfmpie/6YtNyQeupsWN9XlMlvlXsl2SSJbI9b3sMj2P+gmGyzlCasoQsYSX/oh8EjWxFm9YiziXavkO5N4eSEZUYZBC9e5dfj54Z8b5iiLbzoOdFcJ8lIL46fJymzST11NqwrFWU+0OS7mvg5flyMfeSmLIbFBPNZeztJYZyXUS2GzoYyTXIa2cHJP0NxgfBk6zBlebzg+F5FmaG75pBuicjWCfuoyQJwcJIym9RTJcO6PGGZmt27m+3EozGZ7yrbkc2wuoC5DIO+A/0Jei/lxDrvjnMZtLOzN4KVgCQvkWZfwjOV5XHsTep9CUkWNsfB82PaebGNSDbBiIJHbVskOW5N6qqSYfHIWfUSAZ8bTbr5p280+f7piu8eoWyLJoC1Q32wYDQDoN2hH0HXQ3+GXoU6A1P6BFrmJFr+GeguJ3Fdh0Gqve2M8iCZf9CkYOG0H/8SUxbvKadZ7sP5kQY2KWMvit/Ci7MrbKvs3zXK9vRPc/x61FUlw2IDOkhRFm+dpk1FHboZCUk6mThUOfRJ5rni6Eh4yITgcXGQk+3st4S2hraBRjjZNXpdZ/sNVh6SJROaX1h+rc2/prwl/crBd3mJz3CSt0SapT7MiRFt4Y0TnlKUwRk0m+5bR7KQmtuq2b8wcklYUNaWCv2foq69FeVEvpUlfT4sDt4cRyEvOUh+qLYhyQWmSUXNW3aFjmpJNkaNI3ZOjeS6ekdRVkdcWUaLg4vgj4oLpQuOeL4H+g1Jul3NyKKLprE8DW05RlkWP+rx5qCcGpkzVvKatW1JzJM3LNCYMLc9cnRFnz3mxklT31JFOdNj2pMkRTKb0YMkaYjHkYR4cEjB1STnQst5Ee3RrAFl8xwdUQaft2nKtswimRb4VFHHymhRSFLYpt2/TgsHoR6ibI9mu/ussDl8RdGWo0poSyNPxLRHY1icCG9RTu3hH4b1ItrDexFq1gpyCA0bJZvmnoH4x4DnLZcGn+H51BlJGqe5nowWhCTSvMhlFZzvWzVXRBLLlXXn4Dj4xo+dvKd6GhaPPn6UU3smKY6RJsuCBh4Za+Lm/o7mejJaEJKQhPOomO21nqQmAaMR7eH4nvkFtIVHA1PiW/D3dtTVsNYl3bxaFDwvGRt+RDJC1+Rjj4LnG/chebxfpv2S9jwaLQjJJPqPSTdZrYW3Zopc5R/RHjatZ3JsC5sVB5L2itiOaEMtDSv47B6U/lzOg3ZVHiPOe/WTlPUw/CN5ZUN552i/qD2PmeA4LGgwtBW0VxD2MA46BNozeOuYKIF91emcs38faBg0CtoHOgL6FnQg9GVoY6gSwbQksTlPULbRFi/J4aRsmRZPk2xZfwFJvFRauB9/IcWcVUj9tTWs4PP8FjjpfBZPbO+Q4lhNoOQjLY7L4zTWAxrK4cwPHH0fO0WRtI2J4Oh26Fjofmiea75WkWO55kL3QEdD6l/EqgETGgidCz0OvQ19DFGIlkAvQ9dCoYGVZUKyiHlf6D7NhdMA/zKzUXFcVl6blPKmBiNJ3nYtTNCWFUH7v0ZNFu4q6q61YQXf2Q76A8X/AHFYAZ+7VEvmSEZaO5GsdtD82PEE+xgKmdskCb3gf+O30e82KyBNO1UES3yeTbmc5wVodJ0i5GE6faHx0MImBhWlj6Dboc1894PBdbE+ycall0B3Q0+TLOd4DnoMupZkAS2PzDIlwlO0hefadiGJ//kVSeDjs0F7ngrax+EOB1LE260E9fEi8UElKtJYSVK5xJXRa6ROYvo7QGcFx2hWcMz4/E0OjldoQG+KY9b1A8O7ct8UGBPXNZMkZxY/Pn6J9Nu1sRGuGdbXPNrbCxjNcUE0fJY1iLwkSPVa3DcwmpWha6AVKcyqUbMh9bZWZRJcRJk3IM2D4AYpJW9XqxAcs9LOX23OD0zmX6H3M5pVlzgTqvfHpThgMhMzGlWj5kCpJq0Nw0gAzGXlDI+BzXQvlMvQtQhgLttDy3I0LFai1feGYaQAxnJwzmbVlfkhciGuT3IeXXVpHqTascQwjJTAWKYWYFgs57tvYcBU1oQeLsCweC5sD9/9M4yWBsYyvSDDus5338LolFiq1wswLNb3fPfPMFoaJzmxijCsO333LQyYylbQBwUZ1kTf/TOMlqaACfcuPZSyPZynnvN28ZvLcdAp0A+cbLhxPHSAk3ivVFH2MJWR0IcFGdYladpkGIaSAg2Ld4qO3cvQyRIgTjB4OHSb029dtgKaAZ0JfZGNTtNfMyzDqDEFGhbrspi6h0I/c5KuOUs9vHyIN5aNDeA0wzKMGuOKm8Nicf74CdDqPerkUdWhwSgsz/o4aPVSF5H2GaYyojP/GKwuXVT8GTOMNsbJJhVFGVbXoxuP4i6GxkM/drKwenmBJvlbKHS9HExl005Z4FyEYZ1R8ukzjPYCN/ZNBRuWL10a1l+YyhBoRkGGlWgHZsMwEoIb+6QKmEsR+gjapWd/YSorQVcUYFbvQJkzDxiGEQFu6jWg+RUwmCL0iAt5NISx7F6AYd3IZujjHBpGW+EkAd+yChhM3uJ5sl5vDjslD9bUHM1qATTCx7kzjLYDN3U/J7s/f5KDSfDC5wVOH09VtC4M63OnpEKenoNZLYIOL/ucGUZb4yTNzFku/eMhhyhMgHaCNoFGOYlMf86zYU1r1mcYzXBoCtSZwqg4jfKT0FioEknyDKPtwA2+AzQJekVhBjwiewn6BbRtk/I2hh70aFizo/obPB6OgW7o1KVK5qwMj0KnQUOLOQuGYSTCSXDniGCUNBH6L+gq6HLofOgYaFNlWVu44uKu4jRP2+dO2TVnN+hk6GfQZOgq6FLIQV+HIrdxNwyjBYBx3FB1wzIMw/gUJ9kWzLAMw6g+TtLEmGEZhlF9zLAMw6gNZliGYdQGGMfJngxrru++G4ZRM2AcR3kyrJm++24YRs2Acezm8ln6k1Q3++67YRg1A8YxHHrbg2GN9913wzBqBoyjD3RLyWa1ENrAd98Nw6ghMI9dnWRzKMuweE2k5agyDCMdPKdUklm9Ca3ru7+GYdQYmMgg6ImCzWoxtLfvvhqG0QI4mYB/uiCzWgId4LuPhmG0EDCVIdDVUGdORsVzY49CX/bdN8MwWhAnbw45YeD1GYzrk2C0xhuzrua7T4ZhtAEwm9WhMU42XOWR0rMRmglNdRI9v5HvthuGYRiGYRiGYRiGYRiGYRiGYRhG4fw/mutpIT6LSW4AAAAASUVORK5CYII=`,
  };

  private typewriter = null;
  private animationStarted = false;

  constructor(
    private breakpointObserver: BreakpointObserver
  ) {}

  ngOnInit(): void {
    this.isSmallScreen = this.breakpointObserver.isMatched('(max-width: 991px)');
    this.initializeTypewriter();
  }

  startAnimation(): void {
    if (this.animationStarted) {
      return;
    }
    this.animationStarted = true;

    this.initializeTypewriter()
      .pauseFor(1000)
      .typeString(`I'm a Software Developer 👨🏼‍💻 \n`)
      .pauseFor(300)
      .typeString(`Currently working at <a href="${this.company.url}" target="blank"><img height="50px" src="${this.company.logo}"></a> \n`)
      .pauseFor(300)
      .typeString(`Here are some technologies I like to use in my projects:`)
      .callFunction(() => {
        this.showWorkTechnologiesSlide()
          .pipe(
            switchMap(() => forkJoin([
              this.prevArrow.show(),
              this.nextArrow.show(),
            ]))
          )
          .subscribe();
      })
      .start();
  }

  private initializeTypewriter(): any {
    this.typewriter = this.typewriter || new Typewriter(`#workTypewriter`, {
      loop: false,
      delay: 50,
      stringSplitter: (text) => {
        const splitter = new GraphemeSplitter();
        return splitter.splitGraphemes(text);
      }
    });

    return this.typewriter;
  }

  private showWorkTechnologiesSlide(): Observable<void> {
    const animation = anime({
      targets: `#workTechnologiesWrapper`,
      opacity: 1,
      easing: 'easeInOutSine',
      duration: 2000,
      begin: () => {
        document.querySelector<HTMLElement>(`#workTechnologiesWrapper`).style.display = 'block';
        this.workTechnologiesSwiper.initSwiper();
      },
    });

    return from(animation.finished as Promise<void>);
  }
}
