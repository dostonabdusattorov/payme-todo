import { TodosState } from '../../models/todos-state.interface';
import { AuthState } from '../../models';

export interface AppState {
  auth: AuthState;
  todos: TodosState;
}
