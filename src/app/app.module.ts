import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BsDropdownModule} from 'ngx-bootstrap/dropdown';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CenovnikComponent } from './cenovnik/cenovnik.component';
import { GalerijaComponent } from './galerija/galerija.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { OmeniComponent } from './omeni/omeni.component';
import { PocetnaComponent } from './pocetna/pocetna.component';
import { CenovnikService } from './servisi/cenovnik.service';
import { SlikeService } from './servisi/slike.service';
import { FooterComponent } from './footer/footer.component';
import { NovostiService } from './servisi/novosti.service';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CenovnikComponent,
    GalerijaComponent,
    KontaktComponent,
    OmeniComponent,
    PocetnaComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    CarouselModule.forRoot(),
    RouterModule.forRoot([
      {
        path: '',
        component: PocetnaComponent
      },
      {
        path: 'cenovnik',
        component: CenovnikComponent
      },
      {
        path: 'galerija',
        component: GalerijaComponent
      },
      {
        path: 'kontakt',
        component: KontaktComponent
      },
      {
        path: 'omeni',
        component: OmeniComponent
      }
    ])
  ],
  providers: [
    CenovnikService,
    SlikeService,
    NovostiService
  ],
  bootstrap: [AppComponent, NavigationComponent, FooterComponent]
})
export class AppModule { }
