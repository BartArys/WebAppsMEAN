import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  addEvent(newEventName: HTMLInputElement): boolean {
    console.log(newEventName.value);
    return false;
  }

}
