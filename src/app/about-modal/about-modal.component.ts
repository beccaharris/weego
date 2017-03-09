import {Component, ViewEncapsulation} from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'about-modal',
  templateUrl: './about-modal.component.html',
  encapsulation: ViewEncapsulation.None,
  styles: [`
    .dark-modal .modal-content {
      background-color: #292b2c;
      color: white;
    }
    .dark-modal .close {
      color: white;   
    }
    .btn-outline-primary {
      font-size: 16px;
      text-transform: uppercase;
      padding: 6px 6px
    }
    .btn-lg {
      margin-top: 10px;
    }
  `]
})
export class AboutModalComponent {
  closeResult: string;

  constructor(private modalService: NgbModal) {}

  open(content) {
    this.modalService.open(content, { windowClass: 'dark-modal' });
  }

}

//define
//dogs: Array;

//oninit
//dogs = [
  //{id: 1, name: "rufus", desc: "here is a ddescription of rufus"},
  //{id: 2, name: "baxter", desc: "here is a ddescription of baxter"},
//]

//html
//<div *ngFor="let dog of dogs">
  //<p>dog.name</p>
  //<p>dog.desc</p>