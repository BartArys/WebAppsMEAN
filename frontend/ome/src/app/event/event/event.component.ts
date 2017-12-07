import { EventDataService } from '../event-data.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Event } from '../event.model';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  @Output() public removeEvent = new EventEmitter<Event>();
  @Input() event: Event;

  constructor(private dataService: EventDataService) { }

  ngOnInit() {
  }

  delete() {
    this.dataService.deleteEvent(this.event).subscribe(response => this.removeEvent.emit(this.event));
  }

}
