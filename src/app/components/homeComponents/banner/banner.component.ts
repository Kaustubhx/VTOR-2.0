import { Component, Input, OnInit, Output } from '@angular/core';
import { SlidesOutputData, OwlOptions } from 'ngx-owl-carousel-o';

interface carouselData {
  slideTitle: string,
  slideDes: string,
  imageSrc: string,
  imageAlt: string,
}

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

  data: any

  activeSlides?: SlidesOutputData;
  getPassedData(data: SlidesOutputData) {
    this.activeSlides = data;
    console.log(data.startPosition);
    this.data = data.startPosition;
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
    navSpeed: 700,
    navText: ['<span class="material-icons">arrow_back_ios</span>', '<span class="material-icons">arrow_forward_ios</span>'],
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
}
