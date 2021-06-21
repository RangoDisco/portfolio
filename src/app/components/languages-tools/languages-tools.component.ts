import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Tool } from '../../shared/common/tool';
import { ToolsService } from '../../shared/common/tools.service';

@Component({
  selector: 'app-languages-tools',
  templateUrl: './languages-tools.component.html',
  styleUrls: ['./languages-tools.component.scss'],
})
export class LanguagesToolsComponent implements OnInit {
  // Tableau qui va servir à stocker les outils
  public toolsList: Tool[];
  // Necessaire pour la traduction
  constructor(
    private translate: TranslateService,
    private service: ToolsService
  ) {
    translate.addLangs(['en', 'fr']);
    const currentLang = translate.getBrowserLang();
    translate.setDefaultLang(currentLang);
  }
  userLanguage(language: string) {
    this.translate.use(language);
  }

  ngOnInit(): void {
    // Appel de la fonction du service qui vient chercher tous les outils
    this.service.getToolsList().subscribe((data) => {
      // Push des outils dans le tableau
      this.toolsList = data;
    });
  }
}
