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
    this.http.get('http://localhost:8080/events/get-images').subscribe((data: any[]) => {
      data.map(img => {
        img.url = `https://drive.google.com/uc?id=${img.id}`;
        this.images.push(img);
      });
    });
  }

}
