import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-personal-configuration',
  templateUrl: './personal-configuration.component.html',
  styleUrls: ['./personal-configuration.component.css']
})
export class PersonalConfigurationComponent implements OnInit {

  images = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getPersonalImages();
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.images, event.previousIndex, event.currentIndex);
  }

  getPersonalImages() {
    this.http.get('http://localhost:8080/get-images').subscribe((data: any[]) => {
      console.log(data);
      this.images = data;
      console.log(this.images);
    });
  }

}
