import {Component, Input, OnInit} from '@angular/core';
import {Location} from "../home-list/home-list.component";

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.css']
})
export class LocationDetailsComponent implements OnInit {
  @Input() location: Location;

  public googleApiKey: string = "AIzaSyB8ZfaJ79cVCWKdpT0SNx_iXhLmvM75QN4";
  public newReview = {
    author: '',
    rating: 5,
    reviewText: ''
  };
  public formVisible: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
