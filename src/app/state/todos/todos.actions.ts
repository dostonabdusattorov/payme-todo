import { createAction, props } from '@ngrx/store';
import { Todo, TodoRequest } from '../../../models';
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

export const createTodo = createAction(
  '[Todos] Create Todo',
  props<{ newTodoData: TodoRequest }>()
);
export const createTodoSuccess = createAction(
  '[Todos] Create Todo Success',
  props<{ newTodo: Todo }>()
);
export const createTodoFailure = createAction(
  '[Todos] Create Todo Failure',
  props<{ error: HttpErrorResponse }>()
);

export const deleteTodo = createAction(
  '[Todos] Delete Todo',
  props<{ id: string }>()
);
export const deleteTodoSuccess = createAction(
  '[Todos] Delete Todo Success',
  props<{ id: string }>()
);
export const deleteTodoFailure = createAction(
  '[Todos] Delete Todo Failure',
  props<{ id: string; error: HttpErrorResponse }>()
);

export const updateTodo = createAction(
  '[Todos] update Todo',
  props<{ id: string; updatedTodo: TodoRequest }>()
);
export const updateTodoSuccess = createAction(
  '[Todos] update Todo Success',
  props<{ id: string; updatedTodo: Todo }>()
);
export const updateTodoFailure = createAction(
  '[Todos] update Todo Failure',
  props<{ error: HttpErrorResponse }>()
);
