import { HttpErrorResponse } from '@angular/common/http';
import { HttpStatus } from '../constants';
import { Todo } from './todo.interface';
import { ResponseHttp } from './response-http.interface';

export interface TodosState {
  todos: Todo[];
  error: HttpErrorResponse | null;
  status: HttpStatus;
  createTodo: ResponseHttp;
}
