import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DogsComponent }        from '../dogs/dogs.component';
import { CatsComponent }        from '../cats/cats.component';

 
const appRoutes: Routes = [
  {
    path: 'dogs',
    component: DogsComponent
  },{
    path: 'cats',
    component: CatsComponent
  }
]
@NgModule({
  imports: [
    RouterModule.forChild(appRoutes)
  ],
      exports: [
          RouterModule
  ],
      providers: []
})
export class AdoptionRoutingModule { }
