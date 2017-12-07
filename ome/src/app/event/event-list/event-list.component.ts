import { animation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { EventDataService } from '../event-data.service';
import { Event } from '../event.model';
declare var $: any;

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  private _events: Event[];
  private _animate = true;

  constructor(private _eventDataService: EventDataService) { }

  get events(): Event[] {
    return this._events;
  }

  ngOnInit() {
    this._eventDataService.events.subscribe(items => this._events = items);
  }


  public newEventAdded(event: Event) {
    this._eventDataService.newEventAdded(event).subscribe(item => this._events.push(item));
  }

  removeEvent(event: Event) {
    const index = this._events.indexOf(event);
    if (index >= 0) {
      this._events.splice(index, 1);
    }
  }
}
