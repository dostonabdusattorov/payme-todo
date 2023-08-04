import { createReducer, on } from '@ngrx/store';
import { HttpStatus } from '../../../constants';
import { TodosState } from '../../../models';
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
    createTodo: { error, status: HttpStatus.ERROR },
  })),
  on(deleteTodo, (state) => ({
    ...state,
  })),
  on(deleteTodoSuccess, (state, { id }) => ({
    ...state,
    todos: state.todos.filter((todo) => todo.id !== id),
  })),
  on(deleteTodoFailure, (state, { error }) => ({
    ...state,
  })),
  on(updateTodo, (state) => ({
    ...state,
  })),
  on(updateTodoSuccess, (state, { id, updatedTodo }) => ({
    ...state,
    todos: state.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, ...updatedTodo };
      }

      return todo;
    }),
  })),
  on(updateTodoFailure, (state, { error }) => ({
    ...state,
  }))
);
