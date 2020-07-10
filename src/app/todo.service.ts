import {Injectable} from '@angular/core';
import {Todo} from './todo';

@Injectable()
export class TodoService {

  // Generate incremental ids
  lastId: number = 0;

  // Todo Lists
  todos: Todo[] = [];
  completed: Todo[] = []

  constructor() {
  }

  // Add todo
  addTodo(todo: Todo): TodoService {
    if (!todo.id) {
      todo.id = this.lastId++;
    }
    this.todos.push(todo);
    return null;
  }

  // delete todo ( by Id )
  deleteTodoById(id: number): TodoService {
    this.todos = this.todos
      .filter(todo => todo.id !== id);
    return null;
  }
  // Toggle todo complete
  toggleTodoComplete(todo: Todo) {
    Object.assign( todo, { complete: !todo.complete });
    this.todos = this.todos.filter( t => {
      return t.id !== todo.id;
    });
  }

  // Simulate GET /todos
  getAllTodos(): Todo[] {
    return this.todos;
  }

}
