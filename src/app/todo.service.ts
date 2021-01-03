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

  deleteTodo(id:any) {
    let _url = api._todoApi+'/'+id
    return this.http.delete<any>(_url);
  }

  updateTodo(id:any,status:any){
    let _url = api._todoApi+'/'+id
    return this.http.patch<any>(_url,status);
  }
}
