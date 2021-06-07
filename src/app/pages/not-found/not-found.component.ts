import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent implements OnInit {
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
