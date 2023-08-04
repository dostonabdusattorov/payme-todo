import { createReducer, on } from '@ngrx/store';
import { HttpStatus } from '../../../constants';
import { TodosState } from '../../../models';
import {
  createTodo,
  createTodoFailure,
  createTodoSuccess,
  getTodos,
  getTodosFailure,
  getTodosSuccess,
} from './todos.actions';

export const initialState: TodosState = {
  todos: [],
  error: null,
  status: HttpStatus.PENDING,
  createTodo: { error: null, status: HttpStatus.PENDING },
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
  })),
  on(createTodo, (state) => ({
    ...state,
    createTodo: { ...state.createTodo, status: HttpStatus.LOADING },
  })),
  on(createTodoSuccess, (state, { newTodo }) => ({
    ...state,
    todos: [newTodo, ...state.todos],
    createTodo: { ...state.createTodo, status: HttpStatus.SUCCESS },
  })),
  on(createTodoFailure, (state, { error }) => ({
    ...state,
    createTodo: { ...state.createTodo, error, status: HttpStatus.ERROR },
  }))
);
