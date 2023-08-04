import { createReducer, on } from '@ngrx/store';
import { HttpStatus } from '../../../constants';
import { AuthState } from '../../../models';
import { signIn, signInFailure, signInSuccess, signOut } from './auth.actions';

export const initialState: AuthState = {
  user: localStorage.getItem('user')
    ? JSON.parse(`${localStorage.getItem('user')}`).user_id
    : null,
  error: null,
  status: HttpStatus.PENDING,
};

export const authReducer = createReducer(
  initialState,
  on(signIn, (state) => ({ ...state, status: HttpStatus.LOADING })),
  on(signInSuccess, (state, { user }) => ({
    ...state,
    user: user.user_id,
    error: null,
    status: HttpStatus.SUCCESS,
  })),
  on(signInFailure, (state, { error }) => ({
    ...state,
    error,
    status: HttpStatus.ERROR,
  })),
  on(signOut, () => ({ user: null, error: null, status: HttpStatus.PENDING }))
);
