import { NgModule }          from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthFacadeService} from './services/AuthFacade.service'
import { RegisterService } from './services/registrer/register.service';
import { SignInService }   from './services/singIn/singIn.service';

const routes: Routes = [
  { path: '',          component: SignInService },
  { path: 'sign-in',   component: SignInService },
  { path: 'register',  component: RegisterService }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule {}
