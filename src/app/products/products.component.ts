import { Component, OnInit } from '@angular/core';
import { product } from '../interfaces/product';

@Component({
  selector: 'Products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {


  products: product[] = [
    {
      productImg: "https://html.crumina.net/html-utouch/svg-icons/smartphone.svg",
      prodcutDes: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam."
    },
    {
      productImg: "https://html.crumina.net/html-utouch/svg-icons/music%20(1).svg",
      prodcutDes: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam."
    },
    {
      productImg: "https://html.crumina.net/html-utouch/svg-icons/settings%20(4).svg",
      prodcutDes: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam."
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
