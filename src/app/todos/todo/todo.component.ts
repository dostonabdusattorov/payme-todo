import { Component, Input } from '@angular/core';
import { EditDeleteResponse, Todo, User } from '../../../models';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app/state/app.state';
import { deleteTodo, updateTodo } from '../../../app/state/todos/todos.actions';
import { HttpStatus } from '../../../constants';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
  @Input() todo!: Todo;
  @Input() user!: User | null;
  @Input() deleteTodo!: EditDeleteResponse | null;

  httpStatus = HttpStatus;

  constructor(private store: Store<AppState>) {}

  onDeleteTodo(): void {
    this.store.dispatch(deleteTodo({ id: this.todo.id }));
  }

  onUpdateTodo(): void {
    if (this.user) {
      this.store.dispatch(
        updateTodo({
          id: this.todo.id,
          updatedTodo: {
            title: this.todo.title,
            completed: !this.todo.completed,
            user: this.user.user_id,
          },
        })
      );
    }
  }

  get createdDate(): string {
    const date = new Date(this.todo.created_at);
    return `${date.getDay()}.${date.getMonth()}.${date.getFullYear()}`;
  }

  get updatedDate(): string {
    const date = new Date(this.todo.updated_at);
    return `${date.getDay()}.${date.getMonth()}.${date.getFullYear()}`;
  }
}
