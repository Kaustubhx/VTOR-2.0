import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
}
