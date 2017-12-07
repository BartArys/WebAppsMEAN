import { ExpenseDataService } from '../expense-data.service';
import { Component, Input, NgModule, OnInit, Output, EventEmitter } from '@angular/core';
import { Expense } from '../expense.model';
import { EventDataService } from '../../event/event-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {
  @Input() public expense: Expense;
  @Input() public eventId: String;
  @Output() public removeExpense = new EventEmitter<String>();

  constructor(private dataService: ExpenseDataService,
    private router: Router) {
  }

  ngOnInit() {
  }

  edit() {
    this.router.navigate([`event/${this.eventId}/edit/${this.expense.id}`]);
  }

  delete() {
    this.dataService.removeExpense(this.expense.id).subscribe(_ => {
      this.removeExpense.emit(this.expense.id);
    });
  }

}
