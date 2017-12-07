import { EventModule } from './event/event.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FriendsComponent } from './friends/friends.component';
import { Routes } from '@angular/router/src/config';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RoutingModule } from './app-routing.module';
import { PersonModule } from './person/person.module';

@NgModule({
  declarations: [
    AppComponent,
    FriendsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    PersonModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
