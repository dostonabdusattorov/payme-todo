import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { todosSelector } from '../state/todos/todos.selectors';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { userSelector } from '../state/auth/auth.selectors';
import { EditDeleteResponse, ResponseHttp, Todo, User } from '../../models';
import { Subscription } from 'rxjs';
import { HttpStatus } from '../../constants';
import { HttpErrorResponse } from '@angular/common/http';
import { createTodo, getTodos } from '../state/todos/todos.actions';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit, OnDestroy {
  httpStatus = HttpStatus;

  todos!: Todo[];
  error!: HttpErrorResponse;
  status!: HttpStatus;
  createTodo!: ResponseHttp;
  deleteTodo!: EditDeleteResponse | null;
  user!: User | null;

  todosStateSubscription!: Subscription;
  userSubscription!: Subscription;

  todos$ = this.store.select(todosSelector);
  user$ = this.store.select(userSelector);

  selected: string = 'all';

  constructor(private store: Store<AppState>, private fb: FormBuilder) {}

  addTodoForm: FormGroup = this.fb.group({
    newTodoTitle: ['', [Validators.required]],
  });

  ngOnInit(): void {
    this.store.dispatch(getTodos());
    this.todosStateSubscription = this.todos$.subscribe((todosState) => {
      this.todos = todosState.todos;
      this.createTodo = todosState.createTodo;
      this.deleteTodo = todosState.deleteTodo;
      this.status = todosState.status;
    });
    this.userSubscription = this.user$.subscribe((user) => {
      this.user = user;
    });
  }

  get filteredTodos(): Todo[] {
    return this.todos.filter((todo) => {
      if (this.selected === 'all') return true;
      if (this.selected === 'completed') return todo.completed;
      return !todo.completed;
    });
  }

  onAddTodo() {
    if (!this.addTodoForm.valid) {
      return;
    }

    if (this.user) {
      this.store.dispatch(
        createTodo({
          newTodoData: {
            title: this.addTodoForm.value.newTodoTitle,
            completed: false,
            user: this.user.user_id,
          },
        })
      );
    }
  }

  ngOnDestroy(): void {
    this.todosStateSubscription.unsubscribe();
    this.userSubscription.unsubscribe();
  }
}
