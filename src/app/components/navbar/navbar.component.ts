import { ViewportScroller } from '@angular/common';
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
    this.currentLang = this.translate.currentLang;
  }
  ngOnInit(): void {
    this.currentLang = this.translate.currentLang;
  }
}
