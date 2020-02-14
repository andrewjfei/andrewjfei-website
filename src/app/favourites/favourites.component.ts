import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {

  favourites = [];

  constructor() {
    for (let i = 0; i < 9; i++) {

      const j = Math.round(9345 * Math.random());

      if (j % 3 === 0 || j % 5 === 0 || j % 9 === 0) {
        this.favourites.push('../../assets/images/graffiti-wall-akl-city.jpg');
      } else if (j % 2 === 0 || j % 6 === 0 || j % 7 === 0) {
        this.favourites.push('../../assets/images/white-wall-akl-uni-black-and-white.jpg');
      } else {
        this.favourites.push('../../assets/images/mercer-bay-loop.jpg');
      }
    }
  }

  ngOnInit() {
  }

}
