import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { Location } from "./home-list/home-list.component";

@Injectable({
  providedIn: 'root'
})

export class Loc8rDataService {

  constructor(private http: HttpClient) { }

  private baseApiUrl = "http://localhost:3000/api";

  public getLocations(lat: number, lng: number): Promise<Location[]> {
    // const lng: number = -0.969758;
    // const lat: number = 51.551342;
    const maxDistance: number = 10;
    const url = `${this.baseApiUrl}/locations?lng=${lng}&lat=${lat}&maxDistance=${maxDistance}`;
    console.log(`getLocations ${url}`);
    return this.http
      .get(url)
      .toPromise()
      .then(response => response as Location[])
      .catch(this.handleError);
  }


  private handleError(error: any) : Promise<any> {
    console.error('Error something wrong', error);
    return Promise.reject(error.message || error);
  }

  getLocationById(locationId: string) :Promise<Location> {
    const url = `${this.baseApiUrl}/locations/${locationId}`;
    console.log(`getLocation ${url}`);
    return this.http
      .get(url)
      .toPromise()
      .then(response => response as Location)
      .catch(this.handleError);
  }
}
