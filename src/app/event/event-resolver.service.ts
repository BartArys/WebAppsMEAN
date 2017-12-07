import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Event } from './event.model';
import { EventDataService } from './event-data.service';

@Injectable()
export class EventResolver implements Resolve<Event> {
    constructor(private dataService: EventDataService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Event> {
        return this.dataService.getEvent(route.params['id']);
    }
}
