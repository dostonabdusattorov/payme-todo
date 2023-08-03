import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseUrl } from '../../constants';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  signIn(email: string, password: string): Observable<any> {
    return this.http
      .post<any>(`${baseUrl}/auth/signin`, {
        email,
        password,
        headers: new HttpHeaders().set('Content-Type', 'application/json'),
      })
      .pipe(
        tap((res) => {
          console.log(res);
        })
      );
  }
}
