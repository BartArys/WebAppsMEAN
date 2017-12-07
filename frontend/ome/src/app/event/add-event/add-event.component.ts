import { PersonDataService } from '../../person/person-data.service';
import { Component, EventEmitter, OnInit, Output, AfterViewInit } from '@angular/core';
import { Event } from '../../event/event.model';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { EventDataService } from '../event-data.service';
import { Router } from '@angular/router';
import { Person } from '../../person/person/person.model';
declare var $: any;

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit, AfterViewInit {
  private event: FormGroup;
  private _people: Array<Person> = [];

  constructor(private fb: FormBuilder, private dataservice: EventDataService,
    private router: Router, private personservice: PersonDataService) {
  }

  get expenses(): FormArray {
    return <FormArray>this.event.get('expenses');
  }

  get people(): Array<Person> {
    return this._people;
  }

  ngOnInit() {
    this.personservice.people.subscribe(people => {
      this._people = people;
    });

    this.event = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      people: this.fb.control(this.people)
    });
  }

  onSubmit() {
    let people = this.event.value.people;
    if (!Array.isArray(people)) {
      people = [people];
    }
    const event = new Event(this.event.value.name, null, people);

    this.dataservice.newEventAdded(event).subscribe(newevent => {
      this.router.navigate([`event/${newevent.id}`]);
    });
  }

  createExpenses(): FormGroup {
    return this.fb.group({
      amount: ['', [Validators.required]],
      description: ['', [Validators.required]]
    });
  }

  public ngAfterViewInit(): void {
    $('.ui.dropdown').dropdown();
  }
}
