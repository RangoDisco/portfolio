import { Component, OnInit } from '@angular/core';
import { Tool } from '../common/tool';
import { ToolsService } from '../common/tools.service';

@Component({
  selector: 'app-languages-tools',
  templateUrl: './languages-tools.component.html',
  styleUrls: ['./languages-tools.component.scss']
})
export class LanguagesToolsComponent implements OnInit {
  public toolsList: Tool[];
  constructor(private service: ToolsService) { }

  ngOnInit(): void {
    this.service.getToolsList().subscribe((data) => {
      console.log(data)
      this.toolsList = data;
    })
  }

}
