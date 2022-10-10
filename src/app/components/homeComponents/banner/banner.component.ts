import { Component, Input, OnInit } from '@angular/core';
import { SlidesOutputData, OwlOptions } from 'ngx-owl-carousel-o';
import { carouselData } from 'src/app/interfaces/homecarousel';

@Component({
  selector: 'Banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})

export class BannerComponent implements OnInit {

  @Input() bannerInfo: carouselData[] = []

  constructor() { }

  ngOnInit(): void {
  }


  activeSlides?: SlidesOutputData;
  data: any;
  getPassedData(data: SlidesOutputData) {
    this.activeSlides = data;
    this.data = data.startPosition;
    console.log(data.startPosition);
  }

  init: any

  getData(init: SlidesOutputData) {
    console.log(init.startPosition);
    this.init = init.startPosition;
  }

  bannerOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
  touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 300,
    navText: ['<i class="material-icons">arrow_back_ios</i>', '<i class="material-icons">arrow_forward_ios</i>'],
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
    nav: false,
  }
}
