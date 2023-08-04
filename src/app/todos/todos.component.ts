import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  constructor(private store: Store<AppState>, private router: Router) {}

  ngOnInit(): void {
    localStorage.getItem('user') ?? this.router.navigate(['sign-in']);
  }
}
