import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="container">
      <div class="jumbotron p-4 p-md-5 text-white rounded bg-dark main-article" style="margin-top: 1em">
        <div class="col-md-6 px-0">
          <h1 class="display-4 font-italic">{{ jumbotron.heading }}</h1>
          <p class="lead my-3">
            {{ jumbotron.paragraph }}
          </p>
          <p class="lead mb-0"><a [href]="jumbotron.link" class="text-white font-weight-bold">{{ jumbotron.linkText }}</a></p>
        </div>
      </div>

      <div class="row mb-2">

        <div class="col-md-6" *ngFor="let section of sections">
          <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div class="col p-4 d-flex flex-column position-static">
              <strong class="d-inline-block mb-2 text-primary">{{ section.title }}</strong>
              <h3 class="mb-0">{{ section.heading }}</h3>
              <!-- div class="mb-1 text-muted">Nov 12</div -->
              <p class="card-text mb-auto">
                {{ section.paragraph }}
              </p>
              <a [href]="section.link" class="stretched-link">{{ section.linkText }}</a>
            </div>
            <div class="col-auto d-none d-lg-block {{ section.pictureClass }}" style="width: 200px; height: auto;">
            </div>
          </div>
        </div>

      </div>
    </div>
  `
})
export class HomeComponent implements OnInit {

  jumbotron = {
    heading: 'Aitor Llamas Jiménez',
    paragraph: 'Soy un apasionado desarrollador de software.' +
      'Disfruto haciendo realidad ideas innovadoras casi tanto como imaginando los próximos pasos.' +
      'Entre mis hobbies se encuentran también los videojuegos, la filosofía y la narrativa',
    link: 'persona/sobre-mi',
    linkText: 'Saber más sobre mí...'
  };

  sections = [
    {
      title: 'In Finite Loop',
      heading: 'Mi blog sobre desarrollo de software',
      paragraph: 'En este blog escribo sobre mis experiencias en el mundo del desarrollo de software.' +
        'Entre otras cosas, hago reviews sobre librerías del ecosistema Node.js',
      link: 'infiniteloop/angular-reviews',
      linkText: 'Ir al blog',
      pictureClass: 'tech-blog-bg'
    },
    {
      title: 'Kernel',
      heading: 'Mi blog más personal',
      paragraph: 'En este blog escribo mis pensamientos más personales.',
      link: 'kernel/index',
      linkText: 'Ir al blog',
      pictureClass: 'personal-blog-bg'
    },
    {
      title: 'Lists',
      heading: 'Mis listas de recomendaciones',
      paragraph: 'Aquí encontrarás listados de cosas que recomiendo.',
      link: 'lists/software',
      linkText: 'Ir a las listas',
      pictureClass: 'lists-bg'
    },
    {
      title: 'Creative Works',
      heading: 'Enlaces a mis otros trabajos',
      paragraph: 'Aquí encontraras enlaces a mis canales, redes sociales, proyectos...',
      link: 'creativeworks/oss',
      linkText: 'Ir a los enlaces',
      pictureClass: 'creativeworks-bg'
    }
  ];

  ngOnInit(): void {}

}
