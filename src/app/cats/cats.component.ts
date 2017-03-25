import { Component, OnInit, ViewEncapsulation }  from '@angular/core';
import { NgbModal, ModalDismissReasons}          from '@ng-bootstrap/ng-bootstrap';

import { Cat }                                   from './cat';
import { CatService }                            from './cat.service';


@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./cats.component.scss'],
  providers: [CatService],
})
export class CatsComponent implements OnInit{
  closeResult: string;
  cats: Cat[]; 

  constructor(
    private modalService: NgbModal,
    private catService: CatService
  ) {}
    
  open(content) {
    this.modalService.open(content, { windowClass: 'dark-modal' });
  }
  
  getCats(): void {
    this.catService.getCats().then(cats => this.cats = cats);
  }
  ngOnInit(): void {
    this.getCats()
  }
}
