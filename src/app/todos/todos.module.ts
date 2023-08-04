import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TodoComponent } from './todo/todo.component';
import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './todos.component';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [TodosComponent, TodoComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TodosRoutingModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatButtonModule,
  ],
})
export class TodosModule {}
