import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUserData = {
    username:'',
    password:'',
    confirmPass:'',
  }
  constructor(
    private readonly authService:AuthService,
    private readonly router:Router
  ) { }

  ngOnInit(): void {
  }

  registerUser() {
    this.authService.registerUser(this.registerUserData)
    .subscribe(
      res =>{
        console.log(res)
        this.router.navigate(['/login'])
      } ,
      err => console.log(err)
    );
  }
}
