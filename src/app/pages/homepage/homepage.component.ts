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

  title = 'VTOR-2.0';

  slideData = [
    {
      slideTitle: "We Build Scalable Business Solutions",
      slideDes: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus eligendi, quis ab deleniti numquam quam obcaecati quisquam hic qui placeat.",
      imageSrc: 'https://html.crumina.net/html-utouch/img/slides1.png',
      imageAlt: 'slide1'
    },
    {
      slideTitle: "Myybaa store is a product to help small vendors",
      slideDes: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus eligendi, quis ab deleniti numquam quam obcaecati quisquam hic qui placeat",
      imageSrc: 'https://html.crumina.net/html-utouch/img/clouds2.png',
      imageAlt: 'slide2'
    },
    {
      slideTitle: "We help your vision become into a reality",
      slideDes: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus eligendi, quis ab deleniti numquam quam obcaecati quisquam hic qui placeat",
      imageSrc: 'https://html.crumina.net/html-utouch/img/slides2.png',
      imageAlt: 'slide2'
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

