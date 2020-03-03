import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  images = [];
  isPersonalOpen = false;
  isEventsOpen = false;
  selectedImage;

  constructor(private router: Router) {

  }

  ngOnInit() {

  }

  handlePersonalButton() {
    this.isPersonalOpen = true;
    this.isEventsOpen = false;
    console.log('personal clicked');
  }

  handleEventsButton() {
    this.isEventsOpen = true;
    this.isPersonalOpen = false;
    console.log('events clicked');
  }

}
