import { BehaviorSubject, Observable } from 'rxjs/Rx';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Person } from './person/person.model';

@Injectable()
export class AuthenticationService {
  private _url = '/API/people';
  private _person$: BehaviorSubject<string>;

  public redirectUrl: string;

  constructor(private http: Http) {
    const currentPerson = JSON.parse(localStorage.getItem('currentPerson'));
    this._person$ = new BehaviorSubject<string>(currentPerson && currentPerson.email);
  }

  get person$(): BehaviorSubject<string> {
    return this._person$;
  }

  get person(): any {
    return JSON.parse(localStorage.getItem('currentPerson'));
  }

  get token(): string {
    return JSON.parse(localStorage.getItem('currentPerson')).token;
  }

  login(email: string, password: string): Observable<boolean> {
    return this.http.post(`${this._url}/login`, { email: email, password: password })
      .map(res => res.json()).map(res => {
        const token = res.token;
        if (token) {
          localStorage.setItem('currentPerson', JSON.stringify({ email: email, token: token }));
          this._person$.next(email);
          return true;
        } else {
          return false;
        }
      });
  }

  logout() {
    if (this.person$.getValue()) {
      localStorage.removeItem('currentPerson');
      setTimeout(() => this._person$.next(null));
    }
  }

  register(firstname: String, lastname: String, email: string, password: string): Observable<boolean> {
    return this.http.post(`${this._url}/`, { firstname: firstname, lastname: lastname, email: email, password: password })
      .map(res => res.json()).map(res => {
        const token = res.token;
        if (token) {
          localStorage.setItem('currentPerson', JSON.stringify({ email: email, token: res.token }));
          this._person$.next(email);
          return true;
        } else {
          return false;
        }
      });
  }

  checkEmailAvailability(email: string): Observable<boolean> {
    return this.http.post(`${this._url}/checkemail`, { email: email }).map(res => res.json())
      .map(item => {
        if (item.email === 'emailExists') {
          return false;
        } else {
          return true;
        }
      });
  }
}
