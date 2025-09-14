import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AuthFacadeService } from '../../services/auth-facade.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.html',
  styleUrls: []
})
export class RegisterComponent {

  form!: FormGroup;
  loading = false;
  error?: string;

  constructor(private fb: FormBuilder, private facade: AuthFacadeService) {
    this.form = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirm:  ['', [Validators.required]],
    });
  }

  submit(): void {
    if (this.form.invalid) return;

    const { username, password, confirm } = this.form.value;
    if (password !== confirm) {
      this.error = 'Las contraseñas no coinciden';
      return;
    }

    this.loading = true;
    this.error = undefined;

    this.facade.register(username!, password!).subscribe({
      next: () => { this.loading = false; /* navegar o feedback */ },
      error: (e) => { this.loading = false; this.error = e?.error?.message ?? 'Error al registrar'; }
    });
  }
}
