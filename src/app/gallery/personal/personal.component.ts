import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {trigger, style, animate, transition} from '@angular/animations';
import {NgxMasonryComponent} from 'ngx-masonry';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0.0 }),
        animate(300, style({opacity: 1.0}))
      ])
    ])
  ]
})
export class PersonalComponent implements OnInit {

  images = [];
  selectedImage = null;
  lastImage = false;
  firstImage = false;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.getPersonalImages();
  }

  getPersonalImages() {
    this.http.get('https://storage.googleapis.com/storage/v1/b/andrewjfei-gallery-personal/o').subscribe((data: any) => {
      // console.log(data.items);
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
