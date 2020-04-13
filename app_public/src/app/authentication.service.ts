import {Injectable, Inject} from '@angular/core';
import {BROWSER_STORAGE} from "./storage";
import {Loc8rDataService} from "./loc8r-data.service";
import {User} from "./user";
import {AuthResponse} from "./authresponse";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(@Inject(BROWSER_STORAGE) private storage: Storage,
              private loc8rDataService: Loc8rDataService) {
  }

  public getToken(): string {
    return this.storage.getItem('loc8r-token');
  }

  public saveToken(token: string) {
    this.storage.setItem('loc8r-token', token);
  }

  public register(user: User): Promise<any> {
    return this.loc8rDataService.register(user)
      .then((authResponse: AuthResponse) => this.saveToken(authResponse.token));
  }

  public login(user: User): Promise<any> {
    return this.loc8rDataService.login(user)
      .then((authResp: AuthResponse) => this.saveToken(authResp.token));
  }

  public logout() {
    this.storage.removeItem('loc8r-token');
  }

  public isUserLoggedIn(): boolean {
    const token: string = this.getToken();
    if (!token) return false;
    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload.exp > (Date.now() / 1000);
  }

  public getCurrentUser() : User {
    if(this.isUserLoggedIn()) {
      const token: string = this.getToken();
      const {email, name} = JSON.parse(atob(token.split('.')[1]));
      return {email, name} as User;
    }
  }
}
