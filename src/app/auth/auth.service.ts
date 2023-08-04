import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { User } from '../../models';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  signIn(email: string, password: string): Observable<User> {
    return this.http
      .post<User>(`/api/auth/token/login/`, {
        email,
        password,
        headers: new HttpHeaders().set('Content-Type', 'application/json'),
      })
      .pipe(
        tap((user: User) => {
          localStorage.setItem('user', JSON.stringify(user));
          this.router.navigate(['']);
        })
      );
  }
}
