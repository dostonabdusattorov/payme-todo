import { createReducer, on } from '@ngrx/store';
import { HttpStatus } from '../../../constants';
import { TodosState } from '../../../models/todos-state.interface';
import { getTodos, getTodosFailure, getTodosSuccess } from './todos.actions';

export const initialState: TodosState = {
  todos: [],
  error: null,
  status: HttpStatus.PENDING,
};

export const todosReducer = createReducer(
  initialState,
  on(getTodos, (state) => ({ ...state, status: HttpStatus.LOADING })),
  on(getTodosSuccess, (state, { todos }) => ({
    ...state,
    todos,
    status: HttpStatus.SUCCESS,
  })),
  on(getTodosFailure, (state, { error }) => ({
    ...state,
    error,
    status: HttpStatus.ERROR,
  }))
);
