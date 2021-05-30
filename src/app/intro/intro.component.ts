import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  public introPhoto: string = 'assets/img/photo.png'
  public monCv: string;
  constructor() { }

  ngOnInit(): void {
    this.monCv = '../../assets/dias_maxime_cv.pdf';
  }
  navigateTo(target) {
    target.scrollIntoView({ behavior: "smooth" })
  }
}
