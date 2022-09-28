import { Component, OnInit } from '@angular/core';
import { product } from 'src/app/interfaces/product';

@Component({
  selector: 'Products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {


  products: product[] = [
    {
      productImg: "https://html.crumina.net/html-utouch/svg-icons/smartphone.svg",
      productTitle: "Online Shopping",
      prodcutDes: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam."
    },
    {
      productImg: "https://html.crumina.net/html-utouch/svg-icons/music%20(1).svg",
      productTitle: "Multimedia Archives",
      prodcutDes: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam."
    },
    {
      productImg: "https://html.crumina.net/html-utouch/svg-icons/settings%20(4).svg",
      productTitle: "Quick Settings",
      prodcutDes: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam."
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
