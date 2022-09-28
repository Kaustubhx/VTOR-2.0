import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'CaseSlider',
  templateUrl: './caseslider.component.html',
  styleUrls: ['./caseslider.component.css']
})
export class CasesliderComponent implements OnInit {

  caseItemsData = [
    {
      bgColor: '#007bef',
      caseItemImg: 'https://html.crumina.net/html-utouch/img/case1.jpg',
      caseItemNote: 'Investigationes demonstraverunt lectores legere me legunt saepius',
    },
    {
      bgColor: '#af23e0',
      caseItemImg: 'https://html.crumina.net/html-utouch/img/case2.jpg',
      caseItemNote: 'Mirum est notare quam littera gothica, quam nunc putamus parum',
    },
    {
      bgColor: '#007bef',
      caseItemImg: 'https://html.crumina.net/html-utouch/img/case1.jpg',
      caseItemNote: 'Investigationes demonstraverunt lectores legere me legunt saepius',
    },
    {
      bgColor: '#af23e0',
      caseItemImg: 'https://html.crumina.net/html-utouch/img/case2.jpg',
      caseItemNote: 'Mirum est notare quam littera gothica, quam nunc putamus parum',
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  caseSliderOptions: OwlOptions = {
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
