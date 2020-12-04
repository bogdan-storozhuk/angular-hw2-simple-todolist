import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITodo, TodoStoreService } from '../todo-store.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  @Input() todoList;
  @Output() onRemoveItem: EventEmitter<ITodo> = new EventEmitter<ITodo>();

  constructor() {}

  ngOnInit(): void {}

  removeItem(todoItem: ITodo) {
    this.onRemoveItem.emit(todoItem);
  }
}
