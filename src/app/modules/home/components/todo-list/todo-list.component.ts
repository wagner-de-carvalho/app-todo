import { Component, OnInit } from '@angular/core';

// Interface
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  public taskList: Array<TaskList> = [
    { task: 'Estudar', checked: false },
    { task: 'Comer', checked: false },
    { task: 'Dormir', checked: true },
  ];
  constructor() {}
  ngOnInit(): void {}

  public deleteTaskListItem(item: number) {
    this.taskList.splice(item, 1);
  }

  public deleteAllTaskList() {
    const confirm = window.confirm('Deseja realmente apagar tudo?');
    if (confirm) {
      this.taskList = [];
    }
  }
}
