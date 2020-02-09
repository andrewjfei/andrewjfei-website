import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  cartItems = [];
  navBarItems = ['STORE', 'GALLERY', 'PROJECTS', 'ABOUT', `CART (${this.cartItems.length})`];

  constructor() { }

  ngOnInit() {
  }

}
