import { Component, OnInit, Input } from '@angular/core';
import { product } from '../interfaces/product';

@Component({
  selector: 'Product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: product = {} as product

  constructor() { }

  ngOnInit(): void {
  }

}
