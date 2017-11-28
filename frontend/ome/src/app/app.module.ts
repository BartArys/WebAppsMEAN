import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { EventComponent } from './event/event.component';
import { AddEventComponent } from './add-event/add-event.component';


@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    EventComponent,
    AddEventComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
