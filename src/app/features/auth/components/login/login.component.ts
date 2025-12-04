import { Component } from '@angular/core';
import {Router, RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import { AuthService } from '../../auth.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports:[
    CommonModule,
    FormsModule,
    RouterModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email = '';
  password = '';
  error = '';

  constructor(private auth: AuthService, private router: Router) {}

  onSubmit() {
    this.auth.login(this.email, this.password).subscribe({
      next: resp => {
        // login correcto — redirige a la zona privada, por ejemplo '/home'
        this.router.navigate(['/']);
      },
      error: err => {
        console.error(err);
        this.error = 'Email o contraseña incorrectos';
      }
    });
  }
}
