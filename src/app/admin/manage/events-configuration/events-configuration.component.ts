import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-events-configuration',
  templateUrl: './events-configuration.component.html',
  styleUrls: ['./events-configuration.component.css']
})
export class EventsConfigurationComponent implements OnInit {

  images = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getPersonalImages();
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.images, event.previousIndex, event.currentIndex);
  }

  getPersonalImages() {
    this.http.get('http://localhost:8080/events/get-images').subscribe((data: any[]) => {
      console.log(data);
      this.images = data;
      console.log(this.images);
    });
  }

}
