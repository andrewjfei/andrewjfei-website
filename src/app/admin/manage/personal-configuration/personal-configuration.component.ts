import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-personal-configuration',
  templateUrl: './personal-configuration.component.html',
  styleUrls: ['./personal-configuration.component.css']
})
export class PersonalConfigurationComponent implements OnInit {

  // images = [];

  Movies = [
    'Blade Runner',
    'Cool Hand Luke',
    'Heat',
    'Juice',
    'The Far Side of the World',
    'Morituri',
    'Napoleon Dynamite',
    'Pulp Fiction'
  ];

  constructor() { }

  ngOnInit() {
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.Movies, event.previousIndex, event.currentIndex);
  }

}
