import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  images = [];

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

}
