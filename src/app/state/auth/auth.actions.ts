import { createAction, props } from '@ngrx/store';
import { User } from '../../../models';

export const signIn = createAction(
  '[Auth] Sign in',
  props<{ email: string; password: string }>()
);
export const signInSuccess = createAction(
  '[Auth] Sign in Success',
  props<{ user: User }>()
);
export const signInFailure = createAction(
  '[Auth] Sign in Failure',
  props<{ error: string }>()
);
