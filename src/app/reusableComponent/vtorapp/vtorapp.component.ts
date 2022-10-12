import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { vtorApp } from 'src/app/interfaces/vtorAppDetails';

@Component({
  selector: 'Vtorapp',
  templateUrl: './vtorapp.component.html',
  styleUrls: ['./vtorapp.component.css']
})
export class VtorappComponent implements OnInit {

  galleryOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 300,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: false
  }

  @Input() appDetail: vtorApp = {} as vtorApp

  constructor() { }

  ngOnInit(): void {
  }

}
