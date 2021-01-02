import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos:any = []
  createTodoData:any={}
  
  constructor(
    private readonly todoService: TodoService,
    private readonly router:Router
  ) { }

  ngOnInit(): void {
    this.todoService.getTodos()
    .subscribe(
      res =>{
        
        this.todos = res
      },
      err => console.log(err)
    )
  }

  createTodo() {
    this.todoService.createTodo(this.createTodoData).subscribe(
      res => {
        
        this.ngOnInit();
      },
      err => {
        console.log(err)
      }
    )
    console.log(this.createTodoData)
  }

}
