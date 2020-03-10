import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  socialMedia = [
    {name: 'instagram', url: 'https://www.instagram.com/andrewjfei/'},
    {name: 'facebook', url: 'https://www.facebook.com/andrewjfei/'},
    {name: 'twitter', url: 'https://www.twitter.com/andrewjfei/'}
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToPage(url) {
    this.removeSelectedFromNavigationItems();

    this.router.navigate([url]).then( (e) => {
      if (e) {
        console.log('Navigation is successful!');
      } else {
        console.log('Navigation has failed!');
      }
    });
  }

  removeSelectedFromNavigationItems() {
    const elements = document.querySelectorAll('.selected');

    elements.forEach(el => {
      el.classList.remove('selected');
    });
  }

}
