import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router'

import { AppRoutingModule }  from '../app-routing.module'

@Component({
  selector: 'app-adoption',
  templateUrl: './adoption.component.html',
  styleUrls: ['./adoption.component.css']
})
export class AdoptionComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  gotoDogs() {
    this.router.navigate(['/adoption/dogs']);
  }

  gotoCats() {
    this.router.navigate(['/adoption/cats']);
  }

  ngOnInit() {
  }

}
