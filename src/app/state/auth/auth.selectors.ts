import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { AuthState } from '../../../models';

export const userSelector = createSelector(
  (state: AppState) => state.auth,
  (state: AuthState) => state.user
);

export const authErrorSelector = createSelector(
  (state: AppState) => state.auth,
  (state: AuthState) => state.error
);

export const authStatusSelector = createSelector(
  (state: AppState) => state.auth,
  (state: AuthState) => state.status
);
