import { BrowserModule }         from '@angular/platform-browser';
import { NgModule }              from '@angular/core';
import { FormsModule }           from '@angular/forms';
import { HttpModule }            from '@angular/http';
import { Router }                from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {NgbModule}      from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule }      from './app-routing.module';

import { AppComponent }          from './app.component';
import { HeaderComponent }       from './header/header.component';
import { AboutComponent }        from './about/about.component';
import { HomeComponent }         from './home/home.component';
import { PetFinderComponent }    from './pet-finder/pet-finder.component';
import { ContactComponent }      from './contact/contact.component';
import { AnimalsComponent }      from './animals/animals.component';
import { AdoptionComponent }      from './adoption/adoption.component';
import { DogsComponent }          from './dogs/dogs.component';
import { CatsComponent }          from './cats/cats.component';
import { CarouselComponent } from './carousel/carousel.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactComponent,
    HomeComponent,
    AboutComponent,
    PetFinderComponent,
    AnimalsComponent,
    AdoptionComponent,
    CatsComponent,
    DogsComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    NgbModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
