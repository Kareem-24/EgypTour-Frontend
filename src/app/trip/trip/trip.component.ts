import { Component, OnInit } from '@angular/core';
import { Itrip } from '../Models/Itrip';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css']
})
export class TripComponent implements OnInit {

  trip:Itrip={backgroundImage:"https://www.notion.so/images/page-cover/met_frederic_edwin_church_1871.jpg"}
  myPhotos: string[] = [
    'https://via.placeholder.com/300x200', // example URL for an image with size 300x200
    'https://via.placeholder.com/200x300', // example URL for an image with size 200x300
    'https://via.placeholder.com/400x400', // example URL for an image with size 400x400
    'https://via.placeholder.com/800x600', // example URL for an image with size 800x600
    'https://via.placeholder.com/800x600', // example URL for an image with size 800x600

    // Add more dummy image URLs with different sizes here
  ]
  ngOnInit() {
  }

}
