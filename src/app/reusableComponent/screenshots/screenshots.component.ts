import { Component, OnInit, Input } from '@angular/core';
import { appScreenshots } from 'src/app/interfaces/vtorAppScreenshots';

@Component({
  selector: 'Screenshots',
  templateUrl: './screenshots.component.html',
  styleUrls: ['./screenshots.component.css']
})
export class ScreenshotsComponent implements OnInit {

  @Input() screenshot: appScreenshots = {} as appScreenshots

  constructor() { }

  ngOnInit(): void {
  }


}
