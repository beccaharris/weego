import { Component, OnInit, ViewEncapsulation }  from '@angular/core';
import { NgbModal, ModalDismissReasons}          from '@ng-bootstrap/ng-bootstrap';

export class Dog {
  picture: string;
  name: string;
  breed: string;
  gender: string;
  age: string;
  color: string;
  location: string
}

const Dogs: Dog [] = [
  { picture:'../assets/images/dogs/ryder.png', name:'Ryder', breed: 'Labrador Retriever', gender: 'Male - 79 pounds', age: '6 Years 00 Months', color: 'Black color', location: 'Denver Dumb Friends League'},
  { picture:'../assets/images/dogs/jack.png', name: 'Jack', breed: 'Labrador Retriever mix', gender: 'Male - 57 pounds', age: '2 Years 00 Months', color: 'Tricolor color', location: 'Denver Dumb Friends League'},
  { picture:'../assets/images/dogs/trudy.png', name: 'Trudy', breed: 'Black and Tan Coonhound', gender: 'Female - 57 pounds', age: '2 Years 00 Months', color: 'Black color', location: 'Denver Dumb Friends League'},
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
