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
  currentTodoId="";

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

  updateTodo() {
    //console.log(this.currentTodoId);
    //console.log(this.updateTodoData);
    
    this.todoService.updateTodo(this.currentTodoId,this.updateTodoData)
    .subscribe(
      res=>{
        this.updateTodoData={};
        this.ngOnInit();
        this.toast.showSuccessMessage("Task Updated")

      },
      err => {
        console.log(err)
        this.toast.showErrorMessage(err.error.message)
      }
    )

  }
  currentTodoIdUpdate(id:any) {
    this.currentTodoId=id;
  }

}
