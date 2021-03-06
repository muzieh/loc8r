import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../environments/environment";
import {Location, Review} from "./location";
import {AuthResponse} from "./authresponse";
import {User} from "./user";
import {BROWSER_STORAGE} from "./storage";

@Injectable({
  providedIn: 'root'
})

export class Loc8rDataService {

  constructor(
    private http: HttpClient,
    @Inject(BROWSER_STORAGE) private storage: Storage) {
  }

  private baseApiUrl = environment.baseApiUrl;//"http://localhost:3000/api";

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


  private handleError(error: any): Promise<any> {
    console.error('Error something wrong', error);
    return Promise.reject(error.message || error);
  }

  getLocationById(locationId: string): Promise<Location> {
    const url = `${this.baseApiUrl}/locations/${locationId}`;
    console.log(`getLocation ${url}`);
    return this.http
      .get(url)
      .toPromise()
      .then(response => response as Location)
      .catch(this.handleError);
  }

  addReviewByLocationId(locationId: string, review: Review): Promise<Review> {
    const url = `${this.baseApiUrl}/locations/${locationId}/reviews`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.storage.getItem('loc8r-token')}`
      })
    };
    return this.http
      .post(url, review, httpOptions)
      .toPromise()
      .then(review => review as Review)
      .catch(this.handleError);
  }

  login(user: User): Promise<AuthResponse> {
    return this.makeAuthApiCall('login', user);
  }

  register(user: User): Promise<AuthResponse> {
    return this.makeAuthApiCall('register', user);
  }

  private makeAuthApiCall(urlPath: string, user: User): Promise<AuthResponse> {
    const url: string =`${this.baseApiUrl}/${urlPath}` ;
    return this.http
      .post(url, user)
      .toPromise()
      .then(response => response as AuthResponse)
      .catch(this.handleError);
  }
}
