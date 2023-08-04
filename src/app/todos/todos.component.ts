import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { userSelector } from '../state/auth/auth.selectors';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  store$ = this.store.select(userSelector);

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store$.subscribe((user) => console.log(user));
  }
}
