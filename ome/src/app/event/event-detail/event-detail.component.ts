import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Event } from '../event.model';
import { EventDataService } from '../event-data.service';
import { FormBuilder } from '@angular/forms';
import { Expense } from '../expense.model';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  private _event: Event;

  constructor(
    private route: ActivatedRoute,
    private dataService: EventDataService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.route.data.subscribe(item => {
      this._event = item['event'];
    });
  }

  get eventModel(): Event {
    return this._event;
  }

  removeExpense(id: String) {
    console.log(id);
    this._event.expenses = this._event.expenses.filter(exp => exp.id !== id);
  }

}
