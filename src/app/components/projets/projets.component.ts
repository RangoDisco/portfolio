import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Project } from '../../common/project';
import { ProjectService } from '../../common/project.service';

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.scss'],
})
export class ProjetsComponent implements OnInit {
  // Tableau qui va contenir la liste de projets
  public projectList: Project[];

  constructor(private translate: TranslateService, private projectService: ProjectService) {
    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('en');
  }
  userLanguage(language: string) {
    this.translate.use(language);
  }

  ngOnInit(): void {
    // Appel de la fonction du service pour GET la liste de projet
    this.projectService.getProjectList().subscribe((data) => {
      // Push de chaque projet dans le tableau
      this.projectList = data;
    });
  }
}
