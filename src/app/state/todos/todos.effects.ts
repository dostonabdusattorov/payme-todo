import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, from, map, of, switchMap } from 'rxjs';
import { TodosService } from 'src/app/todos/todos.service';
import {
  createTodo,
  createTodoFailure,
  createTodoSuccess,
  getTodos,
  getTodosFailure,
  getTodosSuccess,
} from './todos.actions';

@Injectable()
export class TodosEffects {
  constructor(private actions$: Actions, private todosSer: TodosService) {}

  getTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getTodos),
      switchMap(() =>
        from(this.todosSer.getTodos()).pipe(
          map((todos) => getTodosSuccess({ todos: todos.results })),
          catchError((error) => of(getTodosFailure({ error })))
        )
      )
    )
  );

  createTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createTodo),
      switchMap((action) =>
        from(this.todosSer.createTodo(action.newTodoData)).pipe(
          map((newTodo) => createTodoSuccess({ newTodo })),
          catchError((error) => of(createTodoFailure({ error })))
        )
      )
    )
  );
}
