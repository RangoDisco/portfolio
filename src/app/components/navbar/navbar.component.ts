import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(private scroll: ViewportScroller) { }

  ngOnInit(): void {

  }
  scrollToTop() {
    this.scroll.scrollToPosition([0, 0]);
  }
}
