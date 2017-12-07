import { ExpenseDataService } from '../expense-data.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Expense } from '../expense.model';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Person } from '../../person/person/person.model';
import { PersonDataService } from '../../person/person-data.service';
import { FormControl, Validators } from '@angular/forms/';
import { Router } from '@angular/router';
import { Event } from '../event.model';
declare var $: any;

@Component({
  selector: 'app-edit-expense',
  templateUrl: '../add-expense/add-expense.component.html',
  // templateUrl: './edit-expense.component.html',
  styleUrls: ['./edit-expense.component.css']
})
export class EditExpenseComponent implements OnInit, AfterViewInit {
  private _expense: Expense;
  public expense: FormGroup;
  private event: Event;
  public people: Array<Person>;

  constructor(private route: ActivatedRoute,
    private dataService: ExpenseDataService,
    private personservice: PersonDataService,
    private fb: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.personservice.people.subscribe(people => {
      this.people = people;
    });

    this.expense = this.fb.group({
      paidFor: this.fb.control(this.people, [Validators.required]),
      amount: this.fb.control(0, [Validators.required]),
      description: this.fb.control('', [Validators.required, Validators.minLength(2)])
    });

    const id = this.route.snapshot.paramMap.get('id');
    this.route.data.subscribe(item => {
      this._expense = item['expense'];
      this.event = item['event'];
      console.log(this._expense);
      this.expense.controls['description'].setValue(this._expense.description);
      this.expense.controls['amount'].setValue(this._expense.amount);
      this.expense.controls['paidFor'].setValue(this._expense.paidFor);
    });

  }

  ngAfterViewInit() {
    $('.ui.dropdown').dropdown();
  }

  onSubmit() {
    const description = this.expense.value.description;
    const amount = this.expense.value.amount;
    let paidFor = this.expense.value.paidFor;
    if (!Array.isArray(paidFor)) {
      paidFor = [paidFor];
    }

    const expense = new Expense(description, this._expense.id, amount, this._expense.paidBy, paidFor, this.event);
    this.dataService.editExpense(expense).subscribe(_ => {
      this.router.navigate([`event/${this.event.id}`]);
    });
  }

}
