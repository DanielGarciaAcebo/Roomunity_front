import { Component } from '@angular/core';
import {Router, RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { AuthService } from '../../auth.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports:[
    CommonModule,
    FormsModule,
    RouterModule,
    TranslateModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email = '';
  password = '';
  error = '';

  constructor(private auth: AuthService, private router: Router,private translate: TranslateService) {}
  gotoRegister() {
    this.router.navigate(['/register']);
  }
  onSubmit() {
    this.auth.login(this.email, this.password).subscribe({
      next: resp => {
        // login correcto — redirige a la zona privada, por ejemplo '/home'
        this.router.navigate(['/home']);
      },
      error: err => {
        console.error(err);
        this.error = this.translate.instant('AUTH.LOGIN.ERROR.FAIL_LOGIN');
      }
    });
  }
}
