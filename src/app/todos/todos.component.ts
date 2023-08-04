import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { todosSelector } from '../state/todos/todos.selectors';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  todos$ = this.store.select(todosSelector);

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.todos$.subscribe((todos) => console.log(todos));
  }
}
