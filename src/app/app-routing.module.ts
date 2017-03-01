import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }       from './app.component';
import { HeaderComponent }    from './header/header.component';
import { AdoptionComponent }  from './adoption/adoption.component';
import { EventsComponent }    from './events/events.component';
import { ContactComponent }   from './contact/contact.component';
import { ResourcesComponent } from './resources/resources.component';
import { DashComponent }      from './dash/dash.component';
import { DogsComponent }      from './dogs/dogs.component';
import { CatsComponent }      from './cats/cats.component';

const appRoutes: Routes = [
  {
    path: 'dash',
    component: DashComponent
  },{
    path: 'adoption',
    component: AdoptionComponent,
    children: [
      {
        path: 'dogs',
        component: DogsComponent
      },{
        path: 'cats',
        component: CatsComponent
      }
    ]
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
    path: '',
    redirectTo: '/dash',
    pathMatch: 'full'
  },{
    path: '**',
    redirectTo: '/dash',
    pathMatch: 'full'
  }
]
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
      exports: [
          RouterModule
  ],
      providers: []
})
export class AppRoutingModule { }
