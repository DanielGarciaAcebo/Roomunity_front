import { Component, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment.dev';
import { Observable } from 'rxjs';
import { LoginResponse } from '../../models/login-response.model';

@Component({
  selector: 'app-login',
  templateUrl: '.register.component.html',
  styleUrl: './'
})

@Injectable({ providedIn: 'root' })
export class RegisterComponent {
  private url = `${environment.apiBaseUrl}/auth/registrer`;

  constructor(private http: HttpClient) {}

  register(username: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.url, { username, password });
  }
}
