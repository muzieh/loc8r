import {Component, OnInit} from '@angular/core';

export class Location {
  _id: string;
  name: string;
  distance: number;
  address: string;
  rating: number;
  facilities: string[]
};

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css']
})

export class HomeListComponent implements OnInit {

  constructor() {
  }

  name: string = "Star puc";

  locations: Location[] = [{
    _id: "52ef3a9f79c44a86710fe7f5",
    name: "Star pucc",
    distance: 1121.83,
    address: "Cossmic allay 13",
    rating: 2.3,
    facilities: ["cofee", "toilet", "snack bar"]
  }, {
    _id: "52ef3a9f79c44a86710fe7f7",
    name: "2.30 Works",
    distance: 11.83,
    address: "43 Mosta",
    rating: 5,
    facilities: ["toilet", "snack bar", "free coffe", "photocopy"]
  }];

  ngOnInit() {
  }

}
