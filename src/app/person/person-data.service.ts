import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { AuthenticationService } from './authentication.service';
import { Person } from './person/person.model';

@Injectable()
export class PersonDataService {
  private _appUrl = '/API/People';

  constructor(private http: Http, private auth: AuthenticationService) { }

  public get people(): Observable<Person[]> {
    return this.http.get(this._appUrl, { headers: new Headers({ Authorization: `Bearer ${this.auth.token}` }) }).map(response =>
      response.json().map(item => Person.fromJSON(item))
    );
  }

}
