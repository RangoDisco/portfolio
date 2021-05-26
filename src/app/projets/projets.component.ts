import { Component, OnInit } from '@angular/core';
import { Project } from '../common/project';
import { ProjectService } from '../common/project.service';

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.scss']
})
export class ProjetsComponent implements OnInit {
  public projectList: Project[]
  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.projectService.getProjectList().subscribe((data) => {
      this.projectList = data
    })
  }

}
