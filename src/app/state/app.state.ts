import { AuthState, TodosState } from '../../models';

export interface AppState {
  auth: AuthState;
  todos: TodosState;
}
