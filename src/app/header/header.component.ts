import { Component, EventEmitter, Output } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { Store } from '@ngrx/store';
import { userSelector } from '../state/auth/auth.selectors';
import { AppState } from '../state/app.state';
import { signOut } from '../state/auth/auth.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output()
  readonly toggleMode = new EventEmitter<boolean>();

  constructor(private store: Store<AppState>, private router: Router) {}

  user$ = this.store.select(userSelector);

  onToggleMode({ checked }: MatSlideToggleChange) {
    this.toggleMode.emit(checked);
  }

  onSignOut() {
    this.store.dispatch(signOut());
    localStorage.removeItem('user');
    this.router.navigate(['sign-in']);
  }

  get isThemeDark(): boolean {
    return (
      !!localStorage.getItem('theme') &&
      localStorage.getItem('theme') === 'dark'
    );
  }
}
