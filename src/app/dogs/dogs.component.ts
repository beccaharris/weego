import { Component, OnInit, ViewEncapsulation }  from '@angular/core';
import { NgbModal, ModalDismissReasons}          from '@ng-bootstrap/ng-bootstrap';

export class Dog {
  picture: string;
  name: string;
  breed: string;
  gender: string;
  age: string;
  color: string;
  location: string;
  tagline: string;
  favorites: string;
  specialFeatures: string;
  dreamHome: string;
}

const Dogs: Dog [] = [
  { picture:'../assets/images/dogs/ryder.png', name:'Ryder', breed: 'Labrador Retriever', gender: 'Male - 79 pounds', age: '6 Years 00 Months', color: 'Black color', location: 'Denver Dumb Friends League',
    tagline: 'HANDSOME FELLOW!',
    favorites: 'Leash walks, kind humans, treats',
    specialFeatures: 'New friends here say he walks well on a leash and can be shy; would love to meet the whole family and any household dogs prior to his adoption.',
    dreamHome: 'Nurturing household with no children under 12.'
  },{ picture:'../assets/images/dogs/jack.png', name: 'Jack', breed: 'Labrador Retriever mix', gender: 'Male - 57 pounds', age: '2 Years 00 Months', color: 'Tricolor color', location: 'Denver Dumb Friends League',
    tagline: '',
    favorites: '',
    specialFeatures: '',
    dreamHome: ''
  },{ picture:'../assets/images/dogs/sonny.png', name: 'Sonny', breed: 'German Shepherd Dog mix', gender: 'Male - 64 pounds', age: '9 Years 01 Months', color: 'Tricolor color', location: 'Denver Dumb Friends League',
    tagline: 'A REAL COOL GUY!',
    favorites: 'Going on walks with you.',
    specialFeatures: 'A sweet boy with a great personality. Affectionate, easy going and a good cuddler. Likes to be around people. Calm, seeks attention, easy to leash and walk, housebroken. Has arthritis.',
    dreamHome: 'He is looking for a loving, forever family eager to welcome him!'
  },
]

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./dogs.component.scss']
})
export class DogsComponent {
  closeResult: string;

  dogs = Dogs 

  constructor(private modalService: NgbModal) {}
    
  open(content) {
    this.modalService.open(content, { windowClass: 'dark-modal' });
  }

}
