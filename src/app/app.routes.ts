import { Routes } from '@angular/router';

import {AuthShellComponent} from './features/auth/auth-shell/auth-shell.component';
import { LayoutComponent } from './shared/layout/layout.component';

export const routes: Routes = [
  // When user enters  "/" → go to login
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  // Public area (no main layout)
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

  // Private area (main layout)
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
      {
        path: 'shopping',
        loadComponent: () =>
          import('./features/shopping-page/components/shopping-list/shopping-list.component')
            .then(m => m.ShoppingListComponent),
      },
    ],
  },
  // ✅ Catch-all: anything unknown -> login
  { path: '**', redirectTo: 'login' },
];
