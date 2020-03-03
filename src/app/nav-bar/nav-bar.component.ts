import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  navBarItems = ['store', 'gallery', 'projects', 'about', 'contact'];

  isMenuOpen = false;
  innerWidth;

  constructor(private router: Router) { }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
  }

  handleMenuButton() {
    this.isMenuOpen = !this.isMenuOpen;
    this.isMenuOpen ?
      (document.querySelector('.nav-bar-list') as HTMLElement).style.display = 'inline-block' :
      (document.querySelector('.nav-bar-list') as HTMLElement).style.display = 'none';
  }

  @HostListener('window:scroll')

  onWindowScroll() {
    // console.log(window.pageYOffset)
    const element = document.querySelector('.nav-bar');
    if (window.pageYOffset > 0) {
      element.classList.add('sticky-nav-bar');
    } else {
      element.classList.remove('sticky-nav-bar');
    }
  }

  // Currently not being used because routing seems to be able to work with just href param in HTML
  goToPage(url) {
    this.router.navigate([url]).then( (e) => {
      if (e) {
        console.log('Navigation is successful!');
      } else {
        console.log('Navigation has failed!');
      }
    });
  }

  @HostListener('window:resize', ['$event'])

  onResize(event) {
    if (this.innerWidth > 1060 && window.innerWidth <= 1060 && this.isMenuOpen === true) {
      this.isMenuOpen = false;
    }

    if (window.innerWidth > 1060) {
      (document.querySelector('.nav-bar-list') as HTMLElement).style.display = 'inline-block';
      this.innerWidth = window.innerWidth;
    } else if (window.innerWidth <= 1060 && this.innerWidth > 1060) {
      (document.querySelector('.nav-bar-list') as HTMLElement).style.display = 'none';
      this.innerWidth = window.innerWidth;
    }
  }

}
