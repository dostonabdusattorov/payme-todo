import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { AuthState } from '../../../models/auth-state.interface';

export const authSelector = (state: AppState) => state.auth;
export const userSelector = createSelector(
  authSelector,
  (authState: AuthState) => authState.user
);
