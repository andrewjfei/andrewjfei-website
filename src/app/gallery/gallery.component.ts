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

  constructor(private router: Router) {

  }

  ngOnInit() {
    document.getElementById('gallery').classList.add('selected');
  }

  handlePersonalButton() {
    this.isPersonalOpen = true;
  }

  handleEventsButton() {
    this.isPersonalOpen = false;
  }

}
