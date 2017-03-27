import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { Pet_Finder } from './pet-finder';

@Component({
  moduleId: module.id,
  selector: 'app-pet-finder',
  templateUrl: './pet-finder.component.html',
  styleUrls: ['./pet-finder.component.scss']
})
export class PetFinderComponent {

  species = ['Any', 'Dog', 'Cat'];

  model = new Pet_Finder(18, 'Dr IQ', this.species[0], 'Chuck Overstreet');

  submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done

  get diagnostic() { return JSON.stringify(this.model);}

}
