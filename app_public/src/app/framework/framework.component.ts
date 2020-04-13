import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../authentication.service";
import {User} from "../user";
import {HistoryService} from "../history.service";

@Component({
  selector: 'app-framework',
  templateUrl: './framework.component.html',
  styleUrls: ['./framework.component.css']
})
export class FrameworkComponent implements OnInit {
  public userName: string = '';

  constructor(
    private authenticationService: AuthenticationService,
    private historyService: HistoryService) { }

  ngOnInit() {
    if( this.authenticationService.isUserLoggedIn()) {
      this.userName = this.authenticationService.getCurrentUser().name;
    }
  }

  public doLogout(): void {
    this.authenticationService.logout();
  }

  public isLoggedIn(): boolean {
    return this.authenticationService.isUserLoggedIn();
  }

  public getUsername() {
    const user: User = this.authenticationService.getCurrentUser();
    return user ? user.name : 'Guest';
  }

}
