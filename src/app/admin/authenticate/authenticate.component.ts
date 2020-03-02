import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.css']
})
export class AuthenticateComponent implements OnInit {
  @Output() isAdminChange = new EventEmitter<boolean>();

  username = '';
  password = '';

  adminUsername = 'andrewjfei';
  adminPassword = 'Jordan9361';

  constructor() { }

  ngOnInit() {
  }

  handleUsernameChange(event) {
    this.username = event.target.value;
  }

  handlePasswordChange(event) {
    this.password = event.target.value;
  }

  authenticate() {
    if (this.username === this.adminUsername && this.password === this.adminPassword) {
      this.isAdminChange.emit(true);
    }
  }

}
