import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Expense } from './expense.model';
import { ExpenseDataService } from './expense-data.service';

@Injectable()
export class ExpenseResolver implements Resolve<Expense> {
  constructor(private dataService: ExpenseDataService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Expense> {
    return this.dataService.getExpense(route.params['expenseId']);
  }
}
