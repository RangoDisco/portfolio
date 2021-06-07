import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  currentLang;
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

  changeButton() {
    if (this.translate.currentLang == 'fr') {
      this.currentLang = 'en';
    } else this.currentLang = 'fr';
  }
}
