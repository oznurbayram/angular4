import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css']
})
export class WallComponent implements OnInit {

  constructor(private todoService: TodoService) { }   //servise erişebilmek için
  
  ngOnInit() {
  }

 AddToDo(todoText: HTMLInputElement){
   const obj = {
     text: todoText.value,
     createdAt : new Date()
   };

   this.todoService.AddTodo(obj);
   todoText.value= '';
 }
 
  RemoveTodo(todo : Todo)
  {
    this.todoService.RemoveToDo(todo)
  }

}
