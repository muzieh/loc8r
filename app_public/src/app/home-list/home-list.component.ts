import {Component, OnInit} from '@angular/core';
import {Loc8rDataService} from "../loc8r-data.service";
import {GeolocationService} from "../geolocation.service";
import {Location} from "../location";

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css']
})

export class HomeListComponent implements OnInit {

  constructor(private loc8rDataService: Loc8rDataService, private geolocationService: GeolocationService) {
  }

  ngOnInit() {
    this.getPosition();
  }

  locations: Location[];
  message: string = "";

  private getPosition(): void {
    this.message = 'Getting geolocation service ...';
    this.geolocationService.getPosition(
      this.getLocations.bind(this),
      this.showError.bind(this),
      this.noGeo.bind(this));
  }

  private getLocations(position: any): void {
    this.message = 'Searching for nerby places';
    console.dir(position);
    const lat: number = position.coords.latitude;
    const lng: number = position.coords.longitude;
    this.loc8rDataService
      .getLocations(lat, lng)
      .then(foundLocations => {
        this.message = foundLocations.length > 0 ? '' : 'No location found';
        this.locations = foundLocations
      });
  }

  private showError(error: any): void {
    this.message = error.message;
  }

  private noGeo(): void {
    this.message = 'Geolocation not supported by this browser';
  }

}
