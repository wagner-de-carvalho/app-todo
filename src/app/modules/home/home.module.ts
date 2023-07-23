import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { HeaderComponent } from './components/header/header.component';
import { TodoButtonDeleleAllComponent } from './components/todo-button-delele-all/todo-button-delele-all.component';
import { TodoInputAddItemsComponent } from './components/todo-input-add-items/todo-input-add-items.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

// Pages
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    HeaderComponent,
    TodoButtonDeleleAllComponent,
    TodoInputAddItemsComponent,
    TodoListComponent,
    HomeComponent,
  ],
  imports: [CommonModule],
})
export class HomeModule {}
