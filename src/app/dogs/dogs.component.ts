import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

export class Dogs {
  id: number;
  name: string;
  breed: string;
  gender: string;
  age: string;
  color: string;
  location: string
}

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.scss']
})
export class DogsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const DOGS: Dogs [] = [
      {id: 1, name: 'Rufus', breed: 'German Shepherd Dog and Australian Cattle Dog', gender: 'Male - 51 pounds', age: '02 Years 02 Months', color: 'Red color', location:'Denver Dumb Friends League'}
    ]
  }

}
