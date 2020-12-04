import { Component, OnInit } from '@angular/core';
import { ITodo, TodoStoreService } from '../todo-store.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  todoList = [];

  constructor(private store: TodoStoreService) {}

  ngOnInit(): void {
    this.store.fetchData(10).then((todoList) => (this.todoList = todoList));
  }

  addNewTodo(title) {
    if (!title) return;

    this.todoList.push({
      title,
      completed: false,
    });
  }

  removeItem(todoItem: ITodo) {
    this.todoList = this.todoList.filter((v) => v !== todoItem);
  }
}
