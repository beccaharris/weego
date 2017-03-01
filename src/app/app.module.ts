import { BrowserModule }      from '@angular/platform-browser';
import { NgModule }           from '@angular/core';
import { FormsModule }        from '@angular/forms';
import { HttpModule }         from '@angular/http';
import { RouterModule }       from '@angular/router';

import { AppComponent }       from './app.component';
import { HeaderComponent }    from './header/header.component';
import { AdoptionComponent }  from './adoption/adoption.component';
import { EventsComponent }    from './events/events.component';
import { ContactComponent }   from './contact/contact.component';
import { ResourcesComponent } from './resources/resources.component';
import { DashComponent }      from './dash/dash.component';
import { DogsComponent } from './dogs/dogs.component';
import { CatsComponent } from './cats/cats.component';

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
    RouterModule.forRoot([
      {
        path: 'dash',
        component: DashComponent
      },{
        path: 'adoption',
        component: AdoptionComponent
      },{
        path: 'events',
        component: EventsComponent
      },{
        path: 'resources',
        component: ResourcesComponent
      },{
        path: 'contact',
        component: ContactComponent
      },{
        path: 'adoption/dogs',
        component: DogsComponent
      },{
        path: 'adoption/cats',
        component: CatsComponent
      },{
        path: '',
        redirectTo: '/dash',
        pathMatch: 'full'
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
