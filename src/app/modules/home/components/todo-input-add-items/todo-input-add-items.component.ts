import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-items',
  templateUrl: './todo-input-add-items.component.html',
  styleUrls: ['./todo-input-add-items.component.scss'],
})
export class TodoInputAddItemsComponent implements OnInit {
  @Output() public emmitItemTaskList = new EventEmitter();

  public addTaskListItem: string = '';
  constructor() {}
  ngOnInit(): void {}

  public submitTaskListItem() {
    if (this.addTaskListItem.trim()) {
      this.emmitItemTaskList.emit(this.addTaskListItem);
      this.addTaskListItem = '';
    }
  }
}
