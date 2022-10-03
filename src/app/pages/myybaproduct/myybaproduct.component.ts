import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'myybaproduct',
  templateUrl: './myybaproduct.component.html',
  styleUrls: ['./myybaproduct.component.css']
})
export class MyybaproductComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  galleryOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: false
  }

  appScreenshots = [
    {
      appImage: 'https://play-lh.googleusercontent.com/a-KhO5en9zsc1NI9P9RTI83x7anKSgPTfY5kGulKAqRRPMBwdvojkalC4gCtWJxG-gAK=w2560-h1440-rw'
    },
    {
      appImage: 'https://play-lh.googleusercontent.com/UP9Nwu2LEHAJHGzn57yMCTtp1oUW6jqfDtp03W0mZFFsoq2RoD7HTzIW8rn5Bkoy0w=w2560-h1440-rw'
    },
    {
      appImage: 'https://play-lh.googleusercontent.com/3V9QBR_nrBHl5PFlblmnH6ghqb33oX9pa3_PAhKOklYfu-f0VWdeVkYQcHnueMMcTw=w2560-h1440-rw'
    },
    {
      appImage: 'https://play-lh.googleusercontent.com/XQVcn1a6quDH00u-SbWI_VEl3Qd3QNi2-uVAf0R4tfeVjQSOXmDzrblt_xv0lRTj-Lc2=w2560-h1440-rw'
    },
  ]
}
