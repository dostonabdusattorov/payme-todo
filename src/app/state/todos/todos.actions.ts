import { createAction, props } from '@ngrx/store';
import { Todo } from '../../../models';
import { HttpErrorResponse } from '@angular/common/http';

export const getTodos = createAction('[Todos] Load todos');
export const getTodosSuccess = createAction(
  '[Todos] Load todos Success',
  props<{ todos: Todo[] }>()
);
export const getTodosFailure = createAction(
  '[Todos] Load todos Failure',
  props<{ error: HttpErrorResponse }>()
);
