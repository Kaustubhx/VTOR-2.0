import { Component, Input, OnInit } from '@angular/core';
import { vtorApp } from 'src/app/interfaces/vtorAppDetails';

@Component({
  selector: 'app-vtorapp',
  templateUrl: './vtorapp.component.html',
  styleUrls: ['./vtorapp.component.css']
})
export class VtorappComponent implements OnInit {

  @Input() appDetail: vtorApp = {} as vtorApp

  constructor() { }

  ngOnInit(): void {
  }

}
