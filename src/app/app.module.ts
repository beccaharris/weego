import { BrowserModule }      from '@angular/platform-browser';
import { NgModule }           from '@angular/core';
import { FormsModule }        from '@angular/forms';
import { HttpModule }         from '@angular/http';
import { Router }             from '@angular/router';

import { AppComponent }       from './app.component';
import { AppRoutingModule }   from './app-routing.module';
import { HeaderComponent }    from './header/header.component';
import { AdoptionComponent }  from './adoption/adoption.component';
import { EventsComponent }    from './events/events.component';
import { ContactComponent }   from './contact/contact.component';
import { ResourcesComponent } from './resources/resources.component';
import { DashComponent }      from './dash/dash.component';
import { DogsComponent }      from './dogs/dogs.component';
import { CatsComponent }      from './cats/cats.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AdoptionComponent,
    EventsComponent,
    ContactComponent,
    ResourcesComponent,
    DashComponent,
    DogsComponent,
    CatsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
