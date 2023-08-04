import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { Todo, User } from '../../models';
import { Store } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { userSelector } from '../state/auth/auth.selectors';

@Injectable({
  providedIn: 'root',
})
export class TodosService implements OnInit, OnDestroy {
  private user!: User | null;

  private userSubscription!: Subscription;
  private user$ = this.store.select(userSelector);

  constructor(private http: HttpClient, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.userSubscription = this.user$.subscribe((user) => {
      this.user = user;
    });
  }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`/api/todo/`, {
      headers: new HttpHeaders().set(
        'Authorization',
        `Bearer ${this.user?.token}`
      ),
    });
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }
}
