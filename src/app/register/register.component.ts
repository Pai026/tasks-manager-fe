import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ToastService } from '../toast.service';

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
    private readonly router:Router,
    private readonly toast:ToastService
  ) { }

  ngOnInit(): void {
  }

  registerUser() {
    this.authService.registerUser(this.registerUserData)
    .subscribe(
      res =>{
        console.log(res)
        this.router.navigate(['/login'])
        this.toast.showSuccessMessage("User Registered Successfully");
      } ,
      err => {
        console.log(err)
        this.toast.showErrorMessage(err.error.message)
      }
    );
  }
}
