import { getLocaleExtraDayPeriods } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { api } from './api';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(
    private http: HttpClient
  ) {}

  getTodos() {
    return this.http.get<any>(api._todoApi);
  }

  createTodo(todo:any) {
    return this.http.post<any>(api._todoApi,todo)
  }
}
