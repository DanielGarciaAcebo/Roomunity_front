import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment.dev';
import { Observable } from 'rxjs';
import { LoginResponse } from '../../models/login-response.model';

@Injectable()
export class RegisterService {
  private url = `${environment.apiBaseUrl}/auth/register`;

  constructor(private http: HttpClient) {}

  register(username: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.url, { username, password });
  }
}
