import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AuthFacadeService } from '../../services/auth-facade.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.html',
  styleUrls: []
})
export class RegisterComponent {

  form!: FormGroup;
  loading = false;
  error?: string;

  constructor(
    private fb: FormBuilder,
    private facade: AuthFacadeService,
    private translate: TranslateService,) {
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
      this.error = this.translate.instant("Register.Confirm-error")
      return;
    }

    this.loading = true;
    this.error = undefined;

    this.facade.register(username!, password!).subscribe({
      next: () => { this.loading = false; /** Next page */ },
      error: (e) => { this.loading = false;
        const backendKey = e?.error?.messageKey; // p.ej: "Register.UserExists"
        this.error = backendKey
          ? this.translate.instant(backendKey)
          : this.translate.instant('Register.Error');
      }
    });
  }
}
