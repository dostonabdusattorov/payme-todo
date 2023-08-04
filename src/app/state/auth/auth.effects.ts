import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '../../../app/auth/auth.service';
import { signIn, signInFailure, signInSuccess } from './auth.actions';
import { catchError, from, map, of, switchMap } from 'rxjs';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private authSer: AuthService) {}

  signIn$ = createEffect(() =>
    this.actions$.pipe(
      ofType(signIn),
      switchMap((action) =>
        from(this.authSer.signIn(action.email, action.password)).pipe(
          map((user) => signInSuccess({ user })),
          catchError((error) => of(signInFailure({ error })))
        )
      )
    )
  );
}
