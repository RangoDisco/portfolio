import { Component, OnInit } from '@angular/core';
import { Tool } from '../../common/tool';
import { ToolsService } from '../../common/tools.service';

@Component({
  selector: 'app-languages-tools',
  templateUrl: './languages-tools.component.html',
  styleUrls: ['./languages-tools.component.scss'],
})
export class LanguagesToolsComponent implements OnInit {
  // Tableau qui va servir à stocker les outils
  public toolsList: Tool[];
  constructor(private service: ToolsService) {}

  ngOnInit(): void {
    // Appel de la fonction du service qui vient chercher tous les outils
    this.service.getToolsList().subscribe((data) => {
      // Push des outils dans le tableau
      this.toolsList = data;
    });
  }
}
