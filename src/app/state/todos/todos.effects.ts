import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, from, map, of, switchMap } from 'rxjs';
import { TodosService } from '../../../app/todos/todos.service';
import {
  createTodo,
  createTodoFailure,
  createTodoSuccess,
  deleteTodo,
  deleteTodoFailure,
  deleteTodoSuccess,
  getTodos,
  getTodosFailure,
  getTodosSuccess,
  updateTodo,
  updateTodoFailure,
  updateTodoSuccess,
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

  deleteTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteTodo),
      switchMap((action) =>
        from(this.todosSer.deleteTodo(action.id)).pipe(
          map(() => deleteTodoSuccess({ id: action.id })),
          catchError((error) => of(deleteTodoFailure({ id: action.id, error })))
        )
      )
    )
  );

  updateTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateTodo),
      switchMap((action) =>
        from(this.todosSer.updateTodo(action.id, action.updatedTodo)).pipe(
          map((updatedTodo) =>
            updateTodoSuccess({ id: action.id, updatedTodo })
          ),
          catchError((error) => of(updateTodoFailure({ error })))
        )
      )
    )
  );
}
