import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {CookieService} from 'ngx-cookie-service';
import { COOKIE_NAME, COOKIE_PATH } from '@app/shared/_constants/app.constants';
import {Injectable} from "@angular/core";
import {UserInterface} from "@app/shared/_interfaces/user.interface";
import {delay} from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class CoreAuth {

  constructor(
    private http: HttpClient,
    private cookie: CookieService,
  ) {}

  login(username: string, password: string): Observable<boolean> {
    // TODO: Předělat ve chvíli, kdy bude BE umět autentikaci uživatelů
    // Teď to povolí test/test uživatele
    // TODO: Delay 2000 simuluje dobu odpovědi z BE
    if (username === "test" && password === "test") {
      this.setCookie("FakeSessionIdFor." + username);
      this.http.get<UserInterface>('/enviserver/users/' + 1).subscribe(userInfo => {
        this.localSetUserInfo(userInfo);
      });
      return of(true).pipe(delay(2000));
    } else {
      return of(false).pipe(delay(2000));
    }

  }

  logout(): Observable<boolean> {
    // TODO: Doplnit ve chvíli, kdy bude BE umět autentikaci uživatelů
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
    return JSON.parse(localStorage.getItem('userInfo')) as UserInterface;
  }

  private localRemoveUserInfo() {
    localStorage.removeItem('userInfo');
  }
}
