import { Component, DoCheck } from '@angular/core';

// Interface
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements DoCheck {
  public taskList: Array<TaskList> = JSON.parse(
    localStorage.getItem('list') || '[]'
  );
  constructor() {}
  ngDoCheck(): void {
    this.setLocalStorage();
  }

  public setLocalStorage() {
    if (this.taskList) {
      this.taskList.sort(
        (first, last) => Number(first.checked) - Number(last.checked)
      );
      localStorage.setItem('list', JSON.stringify(this.taskList));
    }
  }

  public validationInput(event: string, index: number) {
    if (!event.length) {
      const confirm = window.confirm('Tarefa está vazia. Deseja apagar?');
      if (confirm) {
        this.deleteTaskListItem(index);
      }
    }
  }

  public setEmitTaskList(event: string) {
    this.taskList.push({ task: event, checked: false });
  }

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
