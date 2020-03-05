import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {

  images = [];
  selectedImage;

  constructor(private http: HttpClient) {

    // this.images.push({name: 'Mercer Bay Loop', country: 'New Zealand', url: '../../assets/images/pour.jpg'});
    // this.images.push({name: 'Mercer Bay Loop', country: 'New Zealand', url: '../../assets/images/juj-despair-1.jpeg'});
    // this.images.push({name: 'Mercer Bay Loop', country: 'New Zealand', url: '../../assets/images/mercer-bay-loop.jpg'});
    // this.images.push({name: 'Mercer Bay Loop', country: 'New Zealand', url: '../../assets/images/tap-splash.jpg'});
    // this.images.push({name: 'Mercer Bay Loop', country: 'New Zealand', url: '../../assets/images/twig.jpg'});
    // this.images.push({name: 'Mercer Bay Loop', country: 'New Zealand', url: '../../assets/images/juj-despair-2.jpeg'});
    // this.images.push({name: 'Mercer Bay Loop', country: 'New Zealand', url: '../../assets/images/ben-chen-city-night-1.jpg'});
    // this.images.push({name: 'Mercer Bay Loop', country: 'New Zealand', url: '../../assets/images/twig.jpg'});
    // this.images.push({name: 'Mercer Bay Loop', country: 'New Zealand', url: '../../assets/images/juj-neon-flare-2.jpeg'});
    // this.images.push({name: 'Mercer Bay Loop', country: 'New Zealand', url: '../../assets/images/mercer-bay-loop.jpg'});
    // this.images.push({name: 'Mercer Bay Loop', country: 'New Zealand', url: '../../assets/images/pour.jpg'});
    // this.images.push({name: 'Mercer Bay Loop', country: 'New Zealand', url: '../../assets/images/juj-despair-1.jpeg'});
    // this.images.push({name: 'Mercer Bay Loop', country: 'New Zealand', url: '../../assets/images/juj-neon-flare-2.jpeg'});
    // this.images.push({name: 'Mercer Bay Loop', country: 'New Zealand', url: '../../assets/images/ben-chen-city-night-1.jpg'});
    // this.images.push({name: 'Mercer Bay Loop', country: 'New Zealand', url: '../../assets/images/mercer-bay-loop.jpg'});
    // this.images.push({name: 'Mercer Bay Loop', country: 'New Zealand', url: '../../assets/images/juj-neon-flare-1.jpeg'});
    // this.images.push({name: 'Mercer Bay Loop', country: 'New Zealand', url: '../../assets/images/tap-splash.jpg'});
    // this.images.push({name: 'Mercer Bay Loop', country: 'New Zealand', url: '../../assets/images/juj-despair-3.jpeg'});
    // this.images.push({name: 'Mercer Bay Loop', country: 'New Zealand', url: '../../assets/images/tap-splash.jpg'});
    // this.images.push({name: 'Mercer Bay Loop', country: 'New Zealand', url: '../../assets/images/twig.jpg'});
    // this.images.push({name: 'Mercer Bay Loop', country: 'New Zealand', url: '../../assets/images/juj-despair-1.jpeg'});
    // this.images.push({name: 'Mercer Bay Loop', country: 'New Zealand', url: '../../assets/images/ben-chen-city-night-1.jpg'});
    // this.images.push({name: 'Mercer Bay Loop', country: 'New Zealand', url: '../../assets/images/juj-despair-3.jpeg'});
    // this.images.push({name: 'Mercer Bay Loop', country: 'New Zealand', url: '../../assets/images/mercer-bay-loop.jpg'});
    //
    // this.selectedImage = this.images[0];
  }

  ngOnInit() {
    this.getPersonalImages();
  }

  getPersonalImages() {
    this.http.get('http://localhost:8080/personal/get-images').subscribe((data: any[]) => {
      console.log(data)
      data.map(obj => {
        this.images.push(obj);
      });
    });
  }

}
