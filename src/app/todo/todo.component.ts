import { Component, OnInit } from '@angular/core';
import { ToastService } from '../toast.service';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos:any = []
  createTodoData:any={}
  updateTodoData:any={}
  
  constructor(
    private readonly todoService: TodoService,
    private readonly toast:ToastService,
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
        this.toast.showSuccessMessage("Todo Created")
      },
      err => {
        console.log(err)
      }
    )
    console.log(this.createTodoData)
  }

  deleteTodo(id:any) {
    this.todoService.deleteTodo(id)
    .subscribe(
      res=>{
        console.log(res)
        this.ngOnInit();
        this.toast.showSuccessMessage("Todo Deleted")
      },
      err=> {
        console.log(err)
      }
    );
  }

  updateTodo(id:any) {
    console.log(this.updateTodoData);
    this.todoService.updateTodo(id,this.updateTodoData)
    .subscribe(
      res=>{
        this.ngOnInit();
        this.toast.showSuccessMessage("Todo Updated")
      },
      err => {
        console.log(err)
        this.toast.showErrorMessage(err.error.message)
      }
    )

  }

}
