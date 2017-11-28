import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  private firstName: String;
  private lastName: String;
  private email: String;

  private events = Array<String>();

  constructor() {
    this.firstName = 'Bart';
    this.lastName = 'Arys';
    this.email = 'bart.arys.w1102@student.hogent.be';

    this.events = ['Frankrijk 2017', 'Frankrijk 2016', 'Games'];
  }

  ngOnInit() {
  }

  addEvent(name: String) {
    this.events.push(name);
  }
}
