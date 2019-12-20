import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {map, tap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {CookieService} from 'ngx-cookie-service';
import { COOKIE_NAME, COOKIE_PATH } from '@app/shared/_constants/app.constants';
import {Injectable} from "@angular/core";
import {UserInterface} from "@app/shared/_interfaces/user.interface";

@Injectable({
  providedIn: "root"
})
export class CoreAuth {

  constructor(
    private http: HttpClient,
    private cookie: CookieService,
  ) {
  }

  logon(username: string, password: string): Observable<boolean> {
    return this.createCookie({'username': username, 'password': password});
  }

  logoff(): Observable<boolean> {
    this.removeCookie();
    return this.http.post(
      '/api/client/sessionManager/logoff',
      {
        submits: [
          {name: 'continue', value: 'Continue'}
        ]
      },
      {
        observe: 'response'
      })
      .pipe(
        map(res => {
          return res.ok;
        })
      );
  }

  public isAuthenticated(): boolean {
    return this.cookie.check(COOKIE_NAME) && this.cookie.get(COOKIE_NAME) !== undefined;
  }

  public getSessionID() : string {
    return this.cookie.get(COOKIE_NAME);
  }

  /**
   * TODO: Refactor after REAL Api exists
   */
  userInfo(userId: number): Observable<UserInterface> {
    return this.http.get<UserInterface>('/api/users/' + userId);
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

  /**
   * Z DCI CoreGate se vrací:
   * @sessionID res.body.inputs[0].value
   * @environment res.body.inputs[1].value
   * TODO: Refactor after REAL Api exists
   */
  private createCookie({username: username, password: password}): Observable<boolean> {
    return this.http.post(
      '/api/client/sessionManager/logon',
      {
        name: 'logon',
        inputs: [
          {
            name: 'username',
            value: username
          },
          {
            name: 'password',
            value: password
          }
        ],
        submits: [
          {
            name: 'logOver',
            title: 'Log Over'
          }
        ]
      },
      {
        observe: 'response'
      })
      .pipe(
        tap(
          (res) => {
            const sessionId = res.body['inputs'][0].value;
            if (sessionId) {
              this.setCookie(sessionId);
            } else {
              throw new HttpErrorResponse({
                headers: res.headers,
                status: 404,
                statusText: 'EnviServer Session not found.',
                url: res.url
              });
            }
          }),
        map(res => {
          return res.ok;
        })
      );
  }
}
