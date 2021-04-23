import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { SwiperModule } from 'swiper/angular';
import SwiperCore, { Pagination, A11y, Autoplay } from 'swiper/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header.component';
import { ArrowComponent } from './components/arrow.component';
import { WelcomeComponent } from './components/welcome.component';
import { WorkComponent } from './components/work.component';
import { ContactComponent } from './components/contact.component';
import { HomePage } from './pages/home.page';
import { PortfolioPage } from './pages/portfolio.page';

// import Swiper core and required modules


// install Swiper modules
SwiperCore.use([Pagination, A11y, Autoplay]);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ArrowComponent,
    WelcomeComponent,
    WorkComponent,
    ContactComponent,
    HomePage,
    PortfolioPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    LayoutModule,
    SwiperModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
