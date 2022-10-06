import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  vtorTeamData = [
    {
      memberAvatar: 'https://html.crumina.net/html-utouch/img/teammember3.png',
      memberRole: 'Founder',
      memberName: 'Abhijit Chaudhry',
      memberIntro: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.',
    },
    {
      memberAvatar: 'https://html.crumina.net/html-utouch/img/teammember3.png',
      memberRole: 'Founder',
      memberName: 'Moxesh Mehta',
      memberIntro: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.',
    },
    {
      memberAvatar: 'https://html.crumina.net/html-utouch/img/teammember2.png',
      memberRole: 'Founder',
      memberName: 'Britney Simpson',
      memberIntro: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.',
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }
  
}

