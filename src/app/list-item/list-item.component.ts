import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ITodo } from '../todo-store.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent implements OnInit {
  @Input() todo: ITodo;
  @Output() onRemoveItem: EventEmitter<ITodo> = new EventEmitter<ITodo>();

  constructor() {}

  ngOnInit(): void {}
  removeItem(todo) {
    this.onRemoveItem.emit(todo);
  }
}
