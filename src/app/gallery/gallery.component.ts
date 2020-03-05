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
  }

  handleEventsButton() {
    this.isPersonalOpen = false;
  }

}
