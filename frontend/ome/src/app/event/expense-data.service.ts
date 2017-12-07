import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { AuthenticationService } from '../person/authentication.service';
import { Expense } from './expense.model';

@Injectable()
export class ExpenseDataService {
  private _eventUrl = 'http://localhost:4200/API/Events';
  private _expenseUrl = 'http://localhost:4200/API/Expenses';

  constructor(private http: Http, private auth: AuthenticationService) { }

  public addExpense(expense: Expense): Observable<any> {
    return this.http.post(`${this._eventUrl}/${expense.event.id}/expenses`,
      expense, { headers: new Headers({ Authorization: `Bearer ${this.auth.token}` }) });

  }

  public getExpense(id: String): Observable<Expense> {
    return this.http.get(`${this._expenseUrl}/${id}`
      , { headers: new Headers({ Authorization: `Bearer ${this.auth.token}` }) })
      .map(response => response.json())
      .map(response => {
        return Expense.fromJSON(response);
      });
  }

  public editExpense(expense: Expense): Observable<Expense> {
    return this.http.patch(`${this._expenseUrl}/${expense.id}`, expense
      , { headers: new Headers({ Authorization: `Bearer ${this.auth.token}` }) })
      .map(response => response.json())
      .map(response => {
        return Expense.fromJSON(response);
      });
  }

  public removeExpense(id: String): Observable<any> {
    return this.http.delete(`${this._expenseUrl}/${id}`
      , { headers: new Headers({ Authorization: `Bearer ${this.auth.token}` }) });
  }

}
