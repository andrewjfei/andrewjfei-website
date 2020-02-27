import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {

  images = [];
  selectedImage;

  constructor() {
    for (let i = 0; i < 9; i++) {

      this.images.push({name: 'Mercer Bay Loop', country: 'New Zealand', url: '../../assets/images/juj-despair-1.jpeg'});

    }

    this.images.push({name: 'Mercer Bay Loop', country: 'New Zealand', url: '../../assets/images/mercer-bay-loop.jpg'});

    for (let i = 0; i < 9; i++) {

      this.images.push({name: 'Mercer Bay Loop', country: 'New Zealand', url: '../../assets/images/juj-despair-1.jpeg'});

    }

    this.selectedImage = this.images[0];
  }

  ngOnInit() {
  }

}
