import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { Location } from "./home-list/home-list.component";

@Injectable({
  providedIn: 'root'
})
export class Loc8rDataService {

  constructor(private http: HttpClient) { }

  public getLocations(): Promise<Location[]> {
    return null;
  }

}
