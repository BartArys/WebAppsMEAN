import { AuthenticationService } from './person/authentication.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent {

  constructor(private authService: AuthenticationService) { }

  isLoggedIn(): boolean {
    return this.authService.person$.value != null;
  }
}
