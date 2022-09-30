import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

interface reviewData {
  clientImg: string,
  imageAlt: string,
  clientName: string,
  clientSaying: string,
}

@Component({
  selector: 'Clientreviews',
  templateUrl: './client-reviews.component.html',
  styleUrls: ['./client-reviews.component.css']
})
export class ClientReviewsComponent implements OnInit {

  @Input() labReview: reviewData[] = []


  constructor() { }

  ngOnInit(): void {
  }

  reviewOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    // autoWidth: false,
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
