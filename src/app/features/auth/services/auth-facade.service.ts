import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginResponse } from '../models/login-response.model';
import { SignInService } from './sign-in/sign-in.service';
import { RegisterService } from './register/register.service';

@Injectable()
export class AuthFacadeService {
  constructor(
    private signInService: SignInService,
    private registerService: RegisterService,
  ) {}

  login(username: string, password: string): Observable<LoginResponse> {
    return this.signInService.login(username, password);
  }

  register(username: string, password: string): Observable<LoginResponse> {
    return this.registerService.register(username, password);
  }

  // Stubs para SSO
  loginWithProvider(provider: 'google' | 'microsoft'): void {
    // Aquí redirección a tu backend/IdP
    // window.location.href = `${environment.apiBaseUrl}/auth/oauth2/${provider}`;
  }
}
