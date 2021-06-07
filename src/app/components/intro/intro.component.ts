import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
})
export class IntroComponent implements OnInit {
  // string de la photo bind dans l'HTML
  public introPhoto: string = 'assets/img/photo.png';
  // string du cv bind dans l'HTML
  public monCv: string = '../../portfolio/assets/dias_maxime_cv.pdf';
  constructor(private translate: TranslateService) {
    translate.addLangs(['en', 'fr']);
    const currentLang = translate.getBrowserLang();
    translate.setDefaultLang(currentLang);
  }
  userLanguage(language: string) {
    this.translate.use(language);
  }
  ngOnInit(): void {}
}
