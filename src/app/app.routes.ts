import { Routes } from '@angular/router';

import {AuthShellComponent} from './features/auth/auth-shell/auth-shell.component';
import { LayoutComponent } from './shared/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: AuthShellComponent,
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('./features/auth/components/login/login.component')
            .then(m => m.LoginComponent)
      },
      {
        path: 'register',
        loadComponent: () =>
          import('./features/auth/components/register/register.component')
            .then(m => m.RegisterComponent)
      },
    ]
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'calendar',
        loadComponent: () =>
          import('./features/calendar/component/calendar/calendar.component')
            .then(m => m.CalendarComponent),
      },
      // etc...
    ],
  },
  // Al entrar a "/" → ve al login
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];
