import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, from, map, of, switchMap } from 'rxjs';
import { TodosService } from 'src/app/todos/todos.service';
import { getTodos, getTodosFailure, getTodosSuccess } from './todos.actions';

@Injectable()
export class TodosEffects {
  constructor(private actions$: Actions, private todosSer: TodosService) {}

  getTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getTodos),
      switchMap(() =>
        from(this.todosSer.getTodos()).pipe(
          map((todos) => getTodosSuccess({ todos })),
          catchError((error) => of(getTodosFailure({ error })))
        )
      )
    )
  );
}
