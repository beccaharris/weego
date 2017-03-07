import { BrowserModule }      from '@angular/platform-browser';
import { NgModule }           from '@angular/core';
import { FormsModule }        from '@angular/forms';
import { HttpModule }         from '@angular/http';
import { Router }             from '@angular/router';

import { AppRoutingModule }   from '../app-routing.module';

import { AdoptionComponent }  from './adoption.component';
import { DogsComponent }      from '../dogs/dogs.component';
import { CatsComponent }      from '../cats/cats.component';


@NgModule({
  declarations: [
    AdoptionComponent,
    DogsComponent,
    CatsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AdoptionComponent]
})
export class AdoptionModule { }
