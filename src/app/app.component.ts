import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo-Management-Fe';

  constructor(
    private readonly authService: AuthService
  ){}
  loggedIn() {
    return this.authService.loggedIn();
  }

  logout() {
    this.authService.logoutUser();
  }
}
