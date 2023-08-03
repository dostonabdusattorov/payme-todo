import { Component, EventEmitter, Output } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { Store } from '@ngrx/store';
import { userSelector } from '../state/auth/auth.selectors';
import { AppState } from '../state/app.state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output()
  readonly toggleMode = new EventEmitter<boolean>();

  constructor(private store: Store<AppState>) {}

  user$ = this.store.select(userSelector);

  onToggleMode({ checked }: MatSlideToggleChange) {
    this.toggleMode.emit(checked);
  }
}
