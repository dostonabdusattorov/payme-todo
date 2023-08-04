import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { signIn } from '../state/auth/auth.actions';
import {
  authErrorSelector,
  authStatusSelector,
} from '../state/auth/auth.selectors';
import { AppState } from '../state/app.state';
import { HttpStatus } from '../../constants';
import { Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit, OnDestroy {
  hide: boolean = true;
  httpStatus = HttpStatus;
  authStatus!: HttpStatus;
  authError!: HttpErrorResponse | null;

  private authStatusSubscription!: Subscription;
  private authStatus$ = this.store.select(authStatusSelector);

  private authErrorSubscription!: Subscription;
  private authError$ = this.store.select(authErrorSelector);

  constructor(private store: Store<AppState>, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.authStatusSubscription = this.authStatus$.subscribe((status) => {
      this.authStatus = status;
    });
    this.authErrorSubscription = this.authError$.subscribe((error) => {
      this.authError = error;
    });
  }

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  onLogin() {
    if (!this.loginForm.valid) {
      return;
    }

    this.store.dispatch(
      signIn({
        email: this.loginForm.value.email,
        password: this.loginForm.value.password,
      })
    );
  }

  ngOnDestroy(): void {
    this.authStatusSubscription.unsubscribe();
    this.authErrorSubscription.unsubscribe();
  }
}
