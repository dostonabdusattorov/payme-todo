import { createAction, props } from '@ngrx/store';

export const signIn = createAction(
  '[Auth] Sign in',
  props<{ email: string; password: string }>()
);
export const signInSuccess = createAction(
  '[Auth] Sign in Success',
  props<{ user: any }>()
);
export const signInFailure = createAction(
  '[Auth] Sign in Failure',
  props<{ error: string }>()
);
