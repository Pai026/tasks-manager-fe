import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ToastService } from '../toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginUserData = {
    username:'',
    password:'',
  }
  constructor(
    private readonly authService : AuthService,
    private readonly router:Router,
    private readonly toast:ToastService,
  ) { }

  ngOnInit(): void {
  }
  loginUser() {
    this.authService.loginUser(this.loginUserData).subscribe(
      res =>{ 
        console.log(res)
        localStorage.setItem('token', res.access_token)
        this.router.navigate(['/todo'])
        this.toast.showSuccessMessage("Login Successfull")
      },
      err => {
        console.log(err)
        this.toast.showErrorMessage(err.error.message)
      }
    )
  }

}
