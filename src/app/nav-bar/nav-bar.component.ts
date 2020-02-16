import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  cartItems = [];
  navBarItems = ['store', 'gallery', 'projects', 'about', `cart (${this.cartItems.length})`];

  constructor(private router: Router) { }

  ngOnInit() {
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

}
