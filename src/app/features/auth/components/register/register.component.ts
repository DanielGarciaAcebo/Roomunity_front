import { Component } from '@angular/core';
import {Router, RouterModule} from '@angular/router';

import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    TranslateModule
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  email = '';
  username = '';
  password = '';
  confirmPassword = '';
  error = '';
  success = '';

  constructor(
    private auth: AuthService,
    private router: Router,
    private translate: TranslateService
  ) {}

  goToLogin() {
    this.router.navigate(['/login']);
  }
  onSubmit() {
    if (this.password !== this.confirmPassword) {
      this.error = this.translate.instant('AUTH.REGISTER.ERROR.PASS_NO_MACH');
      this.success = '';
      return;
    }
    this.auth.register(this.email, this.password).subscribe({
      next: () => {
        this.error = '';
        this.success = this.translate.instant('AUTH.REGISTER.SUCCESS');
        // opcional: redirigir directamente al login
        this.router.navigate(['/login']);
      },
      error: err => {
        console.error(err);
        this.error = this.translate.instant('AUTH.REGISTER.ERROR.FAIL_REGISTER');
      }
    });
  }
}
