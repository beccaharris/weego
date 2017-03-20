import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Router }            from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [NgbCarouselConfig]
})

export class HomeComponent {

  constructor(
    private router: Router,
    config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = true;
    config.keyboard = false;
   }

  gotoDogs() {
    this.router.navigate(['/adoption/dogs']);
  }
  gotoCats() {
    this.router.navigate(['/adoption/cats']);
  }
  gotoLearn() {
    this.router.navigate(['/about']);
  }
  gotoPetFinder() {
    this.router.navigate(['/pet-finder'])
  }

}
