import { Component, Input, OnInit } from '@angular/core';


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

}
