import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  // Get year for auto update in footer
  public year = new Date();
  constructor(private translate: TranslateService) {
    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('en');
  }
  userLanguage(language: string) {
    this.translate.use(language);
  }

  ngOnInit(): void { }
}
