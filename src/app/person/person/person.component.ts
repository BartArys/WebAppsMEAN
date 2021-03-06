import { Component, OnInit, Input } from '@angular/core';
import { Person } from './person.model';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  @Input() public person: Person;

  constructor() {
  }

  ngOnInit() {
  }

}
