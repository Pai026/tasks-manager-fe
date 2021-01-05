import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { ToastService } from './toast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo-Management-Fe';

  constructor(
    private readonly authService: AuthService,
    private readonly toast:ToastService,
  ){}
  loggedIn() {
    return this.authService.loggedIn();
  }

  logout() {
    this.authService.logoutUser();
    this.toast.showSuccessMessage("User Logged Out Successfully")
  }
}
