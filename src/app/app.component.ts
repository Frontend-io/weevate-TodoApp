import {Component} from '@angular/core';
import {Todo} from './todo';
import {TodoService} from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [TodoService]
})
export class AppComponent {
  constructor(private todoService: TodoService) {
  }

  newTodo: Todo = new Todo();
  addTodo() {
    this.todoService.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }

  // Update todo
  markAsComplete(todo) {
    this.todoService.toggleTodoComplete(todo);
  }

  // Remove todo from list
  removeTodo(todo) {
    this.todoService.deleteTodoById(todo.id);
  }

  // Get all todos
  get todoLists() {
    return this.todoService.getAllTodos();
  }

}
