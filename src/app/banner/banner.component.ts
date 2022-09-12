import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

interface carouselImage {
  imageSrc: string,
  imageAlt: string,
}

@Component({
  selector: 'Banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  @Input() images: carouselImage[] = []
  @Input() indicators = true;
  @Input() controls = true;

  selectedIndex = 0;

  selectImage(index: number): void {
    this.selectedIndex = index
  }

  constructor() { }

  ngOnInit(): void {
  }

  customOptions: OwlOptions = {
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
    nav: true
  }
}
