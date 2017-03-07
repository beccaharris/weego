import { BrowserModule }         from '@angular/platform-browser';
import { NgModule }              from '@angular/core';
import { FormsModule }           from '@angular/forms';
import { HttpModule }            from '@angular/http';
import { Router }                from '@angular/router';

import { AppRoutingModule }      from './app-routing.module';
import { AdoptionModule }        from './adoption/adoption.module';
import { AdoptionRoutingModule } from './adoption/adoption-routing.module';

import { AppComponent }          from './app.component';
import { HeaderComponent }       from './header/header.component';
import { AboutComponent }        from './about/about.component';
import { HomeComponent }         from './home/home.component';
import { PetFinderComponent }    from './pet-finder/pet-finder.component';
import { GalleryComponent }      from './gallery/gallery.component';
import { ContactComponent }      from './contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactComponent,
    HomeComponent,
    AboutComponent,
    PetFinderComponent,
    GalleryComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AdoptionModule,
    AdoptionRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
