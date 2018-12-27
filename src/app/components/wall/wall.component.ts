import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css']
})
export class WallComponent implements OnInit {


  todos: Todo[];
  constructor(private todoService: TodoService) { }   //servise erişebilmek için
   
  ngOnInit() {   //component initiliaze olduğunda çalışan metot   
  this.todos = this.todoService.GetTodos();
  }

 AddToDo(todoText: HTMLInputElement){
   if(todoText != null)

   { const obj = {
    text: todoText.value,
    createdAt : new Date()
   };

  this.todoService.AddTodo(obj);
  todoText.value= '';
}
 }
 
  RemoveTodo(todo : Todo)
  {
    this.todoService.RemoveToDo(todo)
  }

}
