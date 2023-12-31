import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subscription, tap } from 'rxjs';
import { Todo, TodoRequest, Todos, User } from '../../models';
import { Store } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { userSelector } from '../state/auth/auth.selectors';

@Injectable({
  providedIn: 'root',
})
export class TodosService implements OnDestroy {
  private user!: User | null;

  private userSubscription!: Subscription;
  private user$ = this.store.select(userSelector);

  constructor(private http: HttpClient, private store: Store<AppState>) {
    this.userSubscription = this.user$.subscribe((user) => {
      this.user = user;
    });
  }

  getHeaders(): HttpHeaders {
    return new HttpHeaders().set('Authorization', `Token ${this.user?.token}`);
  }

  getTodos(): Observable<Todos> {
    return this.http.get<Todos>(`/api/todo/`, {
      headers: this.getHeaders(),
    });
  }

  createTodo(newTodo: TodoRequest): Observable<Todo> {
    return this.http.post<Todo>('/api/todo/', newTodo, {
      headers: this.getHeaders(),
    });
  }

  deleteTodo(id: string): Observable<any> {
    return this.http.delete<any>(`/api/todo/${id}`, {
      headers: this.getHeaders(),
    });
  }

  updateTodo(id: string, updatedTodo: TodoRequest): Observable<Todo> {
    return this.http.put<Todo>(`/api/todo/${id}/`, updatedTodo, {
      headers: this.getHeaders(),
    });
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }
}
