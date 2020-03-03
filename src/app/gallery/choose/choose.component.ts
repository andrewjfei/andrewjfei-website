import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-choose',
  templateUrl: './choose.component.html',
  styleUrls: ['./choose.component.css']
})
export class ChooseComponent implements OnInit {
  @Output() handlePersonalButton = new EventEmitter<boolean>();
  @Output() handleEventsButton = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  handleButtonClick(button) {
    button === 'Personal' ? this.handlePersonalButton.emit() : this.handleEventsButton.emit();
  }

}
