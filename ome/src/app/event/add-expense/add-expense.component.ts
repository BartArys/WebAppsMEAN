import { AuthenticationService } from '../../person/authentication.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Expense } from '../expense.model';
import { FormGroup } from '@angular/forms';
import { Person } from '../../person/person/person.model';
import { ActivatedRoute, Router } from '@angular/router/';
import { ExpenseDataService } from '../expense-data.service';
import { PersonDataService } from '../../person/person-data.service';
import { FormBuilder, Validators } from '@angular/forms/';
import { Event } from '../../event/event.model';
declare var $: any;

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent implements OnInit, AfterViewInit {
  public expense: FormGroup;
  private event: Event;
  public people: Array<Person>;

  constructor(private route: ActivatedRoute,
    private dataService: ExpenseDataService,
    private fb: FormBuilder,
    private auth: AuthenticationService,
    private router: Router) { }

  ngOnInit() {
    this.route.data.subscribe(item => {
      this.event = item['event'];
      this.people = this.event.people.filter(person => {
        return person.email !== this.auth.person.email;
      });
    });

    this.expense = this.fb.group({
      paidFor: this.fb.control(null, [Validators.required]),
      amount: this.fb.control(0, [Validators.required]),
      description: this.fb.control('', [Validators.required, Validators.minLength(2)])
    });
  }

  onSubmit() {
    const description = this.expense.value.description;
    const amount = this.expense.value.amount;
    let paidFor = this.expense.value.paidFor;
    if (!Array.isArray(paidFor)) {
      paidFor = [paidFor];
    }

    const expense = new Expense(description, null, amount, null, paidFor, this.event);
    this.dataService.addExpense(expense).subscribe(_ => {
      this.router.navigate([`event/${this.event.id}`]);
    });
  }

  ngAfterViewInit() {
    $('.ui.dropdown').dropdown();
  }

}
