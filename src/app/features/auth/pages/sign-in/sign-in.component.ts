import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthFacadeService } from '../../services/auth-facade.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.html',
  styleUrls: []
})
export class SignInComponent {
  form!: FormGroup;
  loading = false;
  error?: string;

  constructor(private fb: FormBuilder, private facade: AuthFacadeService) {
    this.form = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }




  submit(): void {
    if (this.form.invalid) return;
    this.loading = true;
    this.error = undefined;

    const { username, password } = this.form.value;
    this.facade.login(username!, password!).subscribe({
      next: () => { this.loading = false; },
      error: (e) => { this.loading = false; this.error = e?.error?.message ?? 'Error al iniciar sesión'; }
    });
  }

  signInWithGoogle(): void {
    this.facade.loginWithProvider('google');
  }

  signInWithMicrosoft(): void {
    this.facade.loginWithProvider('microsoft');
  }
}
