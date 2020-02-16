import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  socialMedia = ['instagram', 'facebook', 'twitter'];

  constructor() { }

  ngOnInit() {
  }

  handleButtonPress(elementID) {
    const element = document.getElementById(elementID);
    console.log(element)
    // element.scrollIntoView();
    const navBarHeight = document.getElementById('navBar').offsetHeight;

    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition - navBarHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }

}
