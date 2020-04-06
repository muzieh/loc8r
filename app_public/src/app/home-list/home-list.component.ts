import {Component, OnInit} from '@angular/core';
import { Loc8rDataService } from "../loc8r-data.service";

export class Location {
  id: string;
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

  constructor(private loc8rDataService: Loc8rDataService) {
  }

  ngOnInit() {
    this.getLocations();
  }

  name: string = "Star puc";
  locations: Location[];

  private getLocations() : void {
    this.loc8rDataService
      .getLocations()
      .then(foundLocations => this.locations = foundLocations)
  }

  locations1: Location[] = [{
    id: "52ef3a9f79c44a86710fe7f5",
    name: "Star pucc",
    distance: 1121.83,
    address: "Cossmic allay 13",
    rating: 2.3,
    facilities: ["cofee", "toilet", "snack bar"]
  }, {
    id: "52ef3a9f79c44a86710fe7f7",
    name: "2.30 Works",
    distance: 11.83,
    address: "43 Mosta",
    rating: 5,
    facilities: ["toilet", "snack bar", "free coffe", "photocopy"]
  }];


}
