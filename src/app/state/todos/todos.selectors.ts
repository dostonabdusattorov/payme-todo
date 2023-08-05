import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { TodosState } from '../../../models';

export const todosSelector = createSelector(
  (state: AppState) => state.todos,
  (state: TodosState) => state
);
