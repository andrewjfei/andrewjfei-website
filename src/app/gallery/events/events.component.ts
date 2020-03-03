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
    this.getPersonalImages();
  }

  getPersonalImages() {
    this.http.get('http://localhost:8080/get-images').subscribe((data: any[]) => {
      console.log(data);
      this.images = data;
      console.log(this.images);
    });
  }

}
