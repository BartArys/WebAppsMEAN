import { Injectable } from '@angular/core';
import { Event } from './event.model';
import { Http, Response, Headers } from '@angular/http';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { AuthenticationService } from '../person/authentication.service';

@Injectable()
export class EventDataService {
  private _appUrl = 'http://localhost:4200/API/Events';

  constructor(private http: Http, private auth: AuthenticationService) { }

  public get events(): Observable<Event[]> {
    return this.http.get(this._appUrl, { headers: new Headers({ Authorization: `Bearer ${this.auth.token}` }) }).map(response =>
      response.json().map(item => Event.fromJSON(item))
    );
  }

  public newEventAdded(event: Event): Observable<Event> {
    return this.http.post(this._appUrl, event, { headers: new Headers({ Authorization: `Bearer ${this.auth.token}` }) })
      .map(response => response.json()).map(item =>
        Event.fromJSON(item)
      );
  }

  public getEvent(id: String): Observable<Event> {
    return this.http.get(`${this._appUrl}/${id}`, { headers: new Headers({ Authorization: `Bearer ${this.auth.token}` }) })
      .map(response => response.json()).map(item =>
        Event.fromJSON(item)
      );
  }

  public deleteEvent(event: Event): Observable<Event> {
    return this.http.delete(`${this._appUrl}/${event.id}`, { headers: new Headers({ Authorization: `Bearer ${this.auth.token}` }) })
      .map(response => response.json()).map(item =>
        Event.fromJSON(item)
      );
  }

}
