import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {CookieService} from 'ngx-cookie-service';
import { COOKIE_NAME, COOKIE_PATH } from '@app/shared/_constants/app.constants';
import {Injectable} from "@angular/core";
import {UserInterface} from "@app/shared/_interfaces/user.interface";
import {map, tap} from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class CoreAuth {

  constructor(
    private http: HttpClient,
    private cookie: CookieService,
  ) {}

  login(username: string, password: string): Observable<boolean> {
    return this.http.post<UserInterface>('/enviserver/login', {username: username, password: password})
      .pipe(
        map(userInfo => {
          if (userInfo === null) {
            return false;
          }
          this.setCookie(userInfo.id.toString());
          this.localSetUserInfo(userInfo);
          return true;
        })
      );
  }

  logout(): Observable<boolean> {
    this.localRemoveUserInfo();
    this.removeCookie();
    return of<any>(true);
  }

  public isAuthenticated(): boolean {
    return this.cookie.check(COOKIE_NAME) && this.cookie.get(COOKIE_NAME) !== undefined;
  }

  /**
   * @param session sessionId
   * @param expires default is 0 = never
   */
  private setCookie(session: string, expires: number = 0) {
    this.cookie.set(COOKIE_NAME, session, expires, COOKIE_PATH);
  }

  private removeCookie() {
    this.cookie.delete(COOKIE_NAME, COOKIE_PATH);
  }

  private localSetUserInfo(userInfo: UserInterface) {
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
  }

  public localGetUserInfo(): UserInterface {
    console.log(localStorage.getItem('userInfo'))
    return JSON.parse(localStorage.getItem('userInfo')) as UserInterface;
  }

  private localRemoveUserInfo() {
    localStorage.removeItem('userInfo');
  }
}
