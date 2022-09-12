import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'VTOR-2.0';

  images = [
    {
      imageSrc: 'https://html.crumina.net/html-utouch/img/slides1.png',
      imageAlt: 'slide1'
    },
    {
      imageSrc: 'https://html.crumina.net/html-utouch/img/clouds2.png',
      imageAlt: 'slide2'
    },
    {
      imageSrc: 'https://html.crumina.net/html-utouch/img/slides2.png',
      imageAlt: 'slide2'
    }
  ]
}
