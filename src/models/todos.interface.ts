import { Todo } from './todo.interface';

export interface Todos {
  count: number;
  next: any;
  previous: any;
  results: Todo[];
}
