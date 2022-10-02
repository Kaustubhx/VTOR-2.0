import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  labsStoryData = [
    {
      bgColor: '#0083ff',
      yearImg: 'https://html.crumina.net/html-utouch/svg/flag.svg',
      year: '2019',
      yearTitle: 'Claritas est processus',
      yearInfo: 'Wisi enim ad minim veniam, quis nostrud exerci tation qui nunc nobis videntur parum clari.'
    },
    {
      bgColor: '#EF6517',
      yearImg: 'https://html.crumina.net/html-utouch/svg/settings.svg',
      year: '2020',
      yearTitle: 'Typi non claritatem',
      yearInfo: 'Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit lectores legere me lius quod ii legunt.',
    },
    {
      bgColor: '#ff3133',
      yearImg: 'https://html.crumina.net/html-utouch/svg/team.svg',
      year: '2021',
      yearTitle: 'Eodem modo typi',
      yearInfo: 'Investigationes demonstraverunt lectores legere me lius quod.',
    },
    {
      bgColor: '#01a23c',
      yearImg: 'https://html.crumina.net/html-utouch/svg/rocket-launch.svg',
      year: '2022',
      yearTitle: 'Duis autem vel eum',
      yearInfo: 'Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip.',
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }
  
}

