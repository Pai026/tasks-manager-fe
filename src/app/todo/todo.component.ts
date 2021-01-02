import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos:any = []
  constructor(
    private readonly todoService: TodoService
  ) { }

  ngOnInit(): void {
    this.todoService.getTodos()
    .subscribe(
      res =>{
        console.log(res)
        this.todos = res
      },
      err => console.log(err)
    )
  }

}
