import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {

  favourites = [];

  constructor(private router: Router) {
    for (let i = 0; i < 9; i++) {

      this.favourites.push({name: 'Mercer Bay Loop', country: 'New Zealand', url: '../../assets/images/mercer-bay-loop.jpg'});

    }

  }

  ngOnInit() {
  }

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
