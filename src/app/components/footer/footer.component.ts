import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  // Get year for auto update in footer
  public year = new Date();
  constructor() {}

  ngOnInit(): void {}
}
