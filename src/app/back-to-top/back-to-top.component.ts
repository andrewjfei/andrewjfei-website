import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-back-to-top',
  templateUrl: './back-to-top.component.html',
  styleUrls: ['./back-to-top.component.css']
})
export class BackToTopComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  handleBackToTopPress() {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }

}
