import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  bannerData = [
    {
      bannerId_1: "1",
      slideTitle_1: "We Build Scalable Business Solutions",
      slideDes_1: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
      imageSrc_1: 'https://html.crumina.net/html-utouch/img/slides1.png',
      imageAlt_1: 'slide1',
      bannerId_2: '2',
      slideTitle_2: "Myybaa store is a product to help small vendors",
      slideDes_2: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
      imageSrc_2: 'https://html.crumina.net/html-utouch/img/clouds2.png',
      imageAlt_2: 'slide2',
      bannerId_3: '3',
      slideTitle_3: "We help your vision become into a reality",
      slideDes_3: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
      imageSrc_3: 'https://html.crumina.net/html-utouch/img/slides2.png',
      imageAlt_3: 'slide3'
    }
  ]

  clientData = [
    {
      clientImg: 'https://www.vtorlabs.com/assets/user1.png',
      imageAlt: 'Meet Mehta profile',
      clientName: 'Meet Mehta',
      clientSaying: '“ They understand the business scenerio and provide solution thats really effective and satisfying ”',
    },
    {
      clientImg: 'https://www.vtorlabs.com/assets/user2.png',
      imageAlt: 'Neelam Shetty profile',
      clientName: 'Neelam Shetty',
      clientSaying: "“ VTOR Labs resolve's your business problem real fast with utmost quality...”",
    },
    {
      clientImg: 'https://www.vtorlabs.com/assets/user1.jpg',
      imageAlt: 'Hanvant Gadhvi profile',
      clientName: 'Hanvant Gadhvi',
      clientSaying: '“ Just like our name they did an unbelievable job really happy with the quality service by VTOR Labs ”',
    },
  ]

}
