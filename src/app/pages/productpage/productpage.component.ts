import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { vtorApp } from 'src/app/interfaces/appdetails';

@Component({
  selector: 'productpage',
  templateUrl: './productpage.component.html',
  styleUrls: ['./productpage.component.css']
})
export class ProductpageComponent implements OnInit {

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


  product: { id: string; appName: string; } | any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.product = {
      id: this.route.snapshot.params['id'],
      appName: this.route.snapshot.params['appName']
    }
  }

  @Input() appDetail: vtorApp = {} as vtorApp

}
