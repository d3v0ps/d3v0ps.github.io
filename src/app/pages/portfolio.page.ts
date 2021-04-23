
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  template: `
    <app-header [isMainPage]="false"></app-header>
    <div id="container">
      <div class="ocean">
        <div class="wave"></div>
        <div class="wave"></div>
      </div>
      <div class="portfolio">
        <div class="portfolio-section">
          <h2> Templates and examples </h2>
          <div class="card-container">
            <a href="https://github.com/d3v0ps/angular-nest-starter">
              <img src="https://github-readme-stats.vercel.app/api/pin/?username=d3v0ps&repo=angular-nest-starter" />
            </a>
            <a href="https://github.com/d3v0ps/todo-clean-example">
              <img src="https://github-readme-stats.vercel.app/api/pin/?username=d3v0ps&repo=todo-clean-example" />
            </a>
            <a href="https://github.com/d3v0ps/marvel-comics">
              <img src="https://github-readme-stats.vercel.app/api/pin/?username=d3v0ps&repo=marvel-comics" />
            </a>
          </div>
        </div>
        <div class="portfolio-section">
          <h2> Applications </h2>
          <div class="card-container">
            <a href="https://github.com/d3v0ps/angular-packages">
              <img src="https://github-readme-stats.vercel.app/api/pin/?username=d3v0ps&repo=angular-packages" />
            </a>
            <a href="https://github.com/d3v0ps/react-packages">
              <img src="https://github-readme-stats.vercel.app/api/pin/?username=d3v0ps&repo=react-packages" />
            </a>
          </div>
        </div>
        <div class="portfolio-section">
          <h2> Angular Libraries </h2>
          <div class="card-container">
            <a href="https://github.com/d3v0ps/ngx-electronjs">
              <img src="https://github-readme-stats.vercel.app/api/pin/?username=d3v0ps&repo=ngx-electronjs" />
            </a>
            <a href="https://github.com/d3v0ps/ngx-bpmn-modeler">
              <img src="https://github-readme-stats.vercel.app/api/pin/?username=d3v0ps&repo=ngx-bpmn-modeler" />
            </a>
            <a href="https://github.com/d3v0ps/ngx-codex">
              <img src="https://github-readme-stats.vercel.app/api/pin/?username=d3v0ps&repo=ngx-codex" />
            </a>
            <a href="https://github.com/d3v0ps/ngx-gamepad">
              <img src="https://github-readme-stats.vercel.app/api/pin/?username=d3v0ps&repo=ngx-gamepad" />
            </a>
            <a href="https://github.com/d3v0ps/ngx-sounds">
              <img src="https://github-readme-stats.vercel.app/api/pin/?username=d3v0ps&repo=ngx-sounds" />
            </a>
            <a href="https://github.com/d3v0ps/ngx-modal-window">
              <img src="https://github-readme-stats.vercel.app/api/pin/?username=d3v0ps&repo=ngx-modal-window" />
            </a>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    #container {
      background:radial-gradient(ellipse at center, rgba(255,254,234,1) 0%, rgba(255,254,234,1) 35%, #B7E8EB 100%);
      overflow: hidden;
      width: 100%;
      height: 100%;
    }

    .portfolio {
      position: relative;
      margin-top: 56px;
      padding: 1em 2em;
      height: calc(100vh - 56px);
      overflow: auto;
    }

    .portfolio-section > h2 {
      color: #4B9BA6;
    }

    .card-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      align-content: center;
      flex-direction: row;
    }

    .card-container > a {
      padding: 0.5em;
    }

    .ocean {
      height: 5%;
      width:100%;
      position:absolute;
      bottom:0;
      left:0;
      background: #015871;
    }

    .wave {
      background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/85486/wave.svg) repeat-x;
      position: absolute;
      top: -198px;
      width: 6400px;
      height: 198px;
      animation: wave 7s cubic-bezier( 0.36, 0.45, 0.63, 0.53) infinite;
      transform: translate3d(0, 0, 0);
    }

    .wave:nth-of-type(2) {
      top: -175px;
      animation: wave 7s cubic-bezier( 0.36, 0.45, 0.63, 0.53) -.125s infinite, swell 7s ease -1.25s infinite;
      opacity: 1;
    }

    @keyframes wave {
      0% {
        margin-left: 0;
      }
      100% {
        margin-left: -1600px;
      }
    }

    @keyframes swell {
      0%, 100% {
        transform: translate3d(0,-25px,0);
      }
      50% {
        transform: translate3d(0,5px,0);
      }
    }
  `]
})

export class PortfolioPage implements OnInit {
  constructor() { }

  ngOnInit() { }
}
