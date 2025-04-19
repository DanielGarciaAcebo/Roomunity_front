import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment.dev';
import { Observable } from 'rxjs';
import { LoginResponse } from '../../models/login-response.model';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: '../../pages/registrer/register.component.html',
  styleUrl: './'
})

@Injectable({ providedIn: 'root' })
export class RegisterService {
  private url = `${environment.apiBaseUrl}/auth/registrer`;

  constructor(private http: HttpClient) {}

  register(username: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.url, { username, password });
  }
}
