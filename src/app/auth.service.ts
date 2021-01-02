import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {api} from './api';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  constructor(
    private readonly http : HttpClient,
    private readonly router: Router
  ) { }

  registerUser(user: any) {
    return this.http.post<any>(api._registerApi, user)
  }

  loginUser(user:any) {
    return this.http.post<any>(api._loginApi,user)
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logoutUser() {
    localStorage.removeItem('token');
    this.router.navigate(['/login'])
  }
}
