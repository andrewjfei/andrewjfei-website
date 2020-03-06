import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  images = [];
  selectedImage = null;
  lastImage = false;
  firstImage = false;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getEventImages();
  }

  getEventImages() {
    this.http.get('https://storage.googleapis.com/storage/v1/b/andrewjfei-gallery-events/o').subscribe((data: any) => {
      console.log(data.items);
      data.items.map(obj => {
        this.images.push(obj);
      });
    });
  }

  handleImageClick(index) {
    this.selectedImage = index;
    this.handleImageChange();
  }

  nextImage() {
    if (this.selectedImage === null || this.selectedImage === this.images.length - 1) {
      return;
    } else {
      this.selectedImage = this.selectedImage + 1;
    }
  }

  previousImage() {
    if (this.selectedImage === null || this.selectedImage === 0) {
      return;
    } else {
      this.selectedImage = this.selectedImage - 1;
    }
  }

  clearSelectedImage() {
    this.selectedImage = null;
  }

  handleImageChange() {
    this.lastImage = this.selectedImage === this.images.length - 1 ? true : false;
    this.firstImage = this.selectedImage === 0 ? true : false;
  }

}
