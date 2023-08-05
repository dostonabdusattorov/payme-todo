import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoComponent } from './todo/todo.component';
import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './todos.component';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [TodosComponent, TodoComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    TodosRoutingModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatSelectModule,
    MatCardModule,
    MatCheckboxModule,
  ],
})
export class TodosModule {}
