import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }         from './app.component';
import { HeaderComponent }      from './header/header.component';
import { HomeComponent }        from './home/home.component';
import { AboutComponent }       from './about/about.component';
import { AdoptionComponent }    from './adoption/adoption.component';
import { PetFinderComponent }   from './pet-finder/pet-finder.component';
import { ContactComponent }     from './contact/contact.component';
import { DogsComponent }        from './dogs/dogs.component';
import { CatsComponent }        from './cats/cats.component';
import { GalleryComponent }     from './gallery/gallery.component';
import { AnimalsComponent }     from './animals/animals.component';

 
const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },{
    path: 'about',
    component: AboutComponent
  },{
    path: 'adoption',
    component: AdoptionComponent,
    children: [
      {
        path: '',
        redirectTo: 'animals',
        pathMatch: 'full'
      },{
        path: 'animals',
        component: AnimalsComponent
      },{
        path: 'dogs',
        component: DogsComponent
      },{
        path: 'cats',
        component: CatsComponent
      },
    ]
  },{
    path: 'pet-finder',
    component: PetFinderComponent
  },{
    path: 'gallery',
    component: GalleryComponent
  },{
    path: 'contact',
    component: ContactComponent
  },{
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },{
    path: '**',
    redirectTo: '/home',
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
