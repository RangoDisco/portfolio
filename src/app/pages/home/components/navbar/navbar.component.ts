import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  currentLang: String;

  // Necessaire pour la traduction
  constructor(private translate: TranslateService) {
    translate.addLangs(['en', 'fr']);
    translate.currentLang = translate.getBrowserLang();
    translate.setDefaultLang(this.translate.currentLang);
  }
  userLanguage() {
    if (this.translate.currentLang == 'fr') this.translate.use('en');
    else this.translate.use('fr');
    this.changeButton();
  }
  ngOnInit(): void {
    this.changeButton();
  }

  // Change la langue affichée sur le boutton en fonction de la langue selected
  changeButton() {
    if (this.translate.currentLang == 'fr') {
      this.currentLang = 'en';
    } else this.currentLang = 'fr';
  }
}
