import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, tap } from 'rxjs';

import {AuthResponseModel} from '../../models/auth-response.model';
import {environment} from '@env/environment.local';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiBaseUrl
  private tokenKey = environment.tokenKey;

  constructor(private http: HttpClient) {}

  login(user: string, password: string): Observable<AuthResponseModel> {
    return this.http.post<AuthResponseModel>(`${this.apiUrl}/auth/login`, { user, password })
      .pipe(
        tap(resp => {
          localStorage.setItem(this.tokenKey, resp.token);
        })
      );
  }

  register(user: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/auth/register`, { user, password });
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  isLogged(): boolean {
    return !!this.getToken();
  }
}
