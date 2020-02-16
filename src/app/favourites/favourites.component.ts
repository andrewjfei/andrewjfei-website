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

      this.favourites.push({name: 'Mercer Bay Loop', country: 'New Zealand', url: '../../assets/images/mercer-bay-loop.jpg'});

    }

  }

  ngOnInit() {
  }

}
