import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  socialMedia = [
    {name: 'instagram', url: 'https://www.instagram.com/andrewjfei/'},
    {name: 'facebook', url: 'https://www.facebook.com/andrewjfei/'},
    {name: 'twitter', url: 'https://www.twitter.com/andrewjfei/'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
