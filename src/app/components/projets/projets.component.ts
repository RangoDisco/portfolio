import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.scss'],
})
export class ProjetsComponent implements OnInit {
  // Necessaire pour la traduction
  public languages = ['EN', 'FR'];
  constructor(private translate: TranslateService) {
    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('en');
  }
  userLanguage(language: string) {
    this.translate.use(language);
  }

  ngOnInit(): void {}
}
