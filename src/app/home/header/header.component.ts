import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  socialMedia = [
    {name: 'instagram', url: 'https://www.instagram.com/andrewjfei/'},
    {name: 'facebook', url: 'https://www.facebook.com/andrewjfei/'},
    {name: 'twitter', url: 'https://www.twitter.com/andrewjfei/'}
    ];

  constructor() { }

  ngOnInit() {
  }

  handleButtonPress(elementID) {
    const element = document.getElementById(elementID);
    console.log(element)
    const navBarHeight = document.getElementById('navBar').offsetHeight;

    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition - (navBarHeight - 30);

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }

  @HostListener('window:scroll')

  onWindowScroll() {
    const element = document.querySelector('.arrow-down-icon');
    if (window.pageYOffset > 0) {
      (element as HTMLElement).style.display = 'none';
    } else {
      (element as HTMLElement).style.display = 'inline-block';
    }
  }

}
