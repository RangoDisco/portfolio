import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.scss'],
})
export class ProjetsComponent implements OnInit {
  // Tableau qui va contenir la liste de projets
  public projectList: any[] = [];

  // TRAD
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
