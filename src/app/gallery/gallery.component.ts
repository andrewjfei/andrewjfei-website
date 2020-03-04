import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  images = [];
  isPersonalOpen = true;
  selectedImage;

  constructor(private router: Router) {

  }

  ngOnInit() {

  }

  handlePersonalButton() {
    this.isPersonalOpen = true;
    const personalElement = document.querySelector('.personal');
    const eventElement = document.querySelector('.events');
    personalElement.classList.remove('close');
    eventElement.classList.add('close');
    console.log('complete personal');
  }

  handleEventsButton() {
    this.isPersonalOpen = false;
    const personalElement = document.querySelector('.personal');
    const eventElement = document.querySelector('.events');
    eventElement.classList.remove('close');
    personalElement.classList.add('close');
    console.log('complete events');
  }

}
