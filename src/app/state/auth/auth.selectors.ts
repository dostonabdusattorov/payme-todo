import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { AuthState } from '../../../models/auth-state.interface';

export const userSelector = createSelector(
  (state: AppState) => state.auth,
  (state: AuthState) => state.user
);

export const authStatusSelector = createSelector(
  (state: AppState) => state.auth,
  (state: AuthState) => state.status
);
