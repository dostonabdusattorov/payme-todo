import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { signIn } from '../state/auth/auth.actions';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  hide: boolean = true;

  constructor(private store: Store, private fb: FormBuilder) {}

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  onLogin() {
    if (!this.loginForm.valid) {
      return;
    }

    this.store.dispatch(signIn());
  }
}
