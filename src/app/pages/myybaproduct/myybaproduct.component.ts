import { Component, OnInit } from '@angular/core';
import { vtorApp } from 'src/app/interfaces/vtorAppDetails';
@Component({
  selector: 'myybaproduct',
  templateUrl: './myybaproduct.component.html',
  styleUrls: ['./myybaproduct.component.css']
})
export class MyybaproductComponent implements OnInit {

  myybaApp: vtorApp[] = [
    {
      bgColor: '#0083ff',
      appHeading: "Mirum est notare quam littera gothica, quam nunc putamus parum",
      appNote: "Quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas.",
      appDemoImage: "https://html.crumina.net/html-utouch/img/screen3.png",
      appDescription_Title1: "Investigationes demonstraverunt lectores legere me lius",
      appDescription_1: "Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per.",
      appDescription_Title2: "Investigationes demonstraverunt lectores legere me lius",
      appDescription_2: "Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per.",
      appWorkingImage: "https://play-lh.googleusercontent.com/GLODKQhrLSLxD3bcXrxwMRC2qaEY-aND1CDPoMYyCK6uqVSJHCE_3RB9Mbn8kH8AFpk=w2560-h1440-rw",
      appWorkingDescription: "Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per.",
      appPlusPoint_1: "Qolor sit amet, consectetuer.",
      appPlusPoint_2: "Qolor sit amet, consectetuer.",
      appPlusPoint_3: "Qolor sit amet, consectetuer.",
      appPlusPoint_4: "Qolor sit amet, consectetuer.",
      appName: "Myyba Shops",
      appShortDesc: "Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum.",
    }
  ]


  constructor() { }

  ngOnInit(): void {
  }


}
