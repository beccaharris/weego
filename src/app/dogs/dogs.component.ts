import { Component, OnInit, ViewEncapsulation }  from '@angular/core';
import { NgbModal, ModalDismissReasons}          from '@ng-bootstrap/ng-bootstrap';

import { Dog }                                   from './dog';
import { DogService }                            from './dog.service';


@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./dogs.component.scss'],
  providers: [DogService],
})
export class DogsComponent implements OnInit{
  closeResult: string;
  dogs: Dog[]; 

  constructor(
    private modalService: NgbModal,
    private dogService: DogService
  ) {}
    
  open(content) {
    this.modalService.open(content, { windowClass: 'dark-modal' });
  }
  
  getDogs(): void {
    this.dogService.getDogs().then(dogs => this.dogs = dogs);
  }
  ngOnInit(): void {
    this.getDogs()
  }
}
