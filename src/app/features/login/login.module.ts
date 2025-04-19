
import { NgModule }        from '@angular/core';
import { CommonModule }    from '@angular/common';
import { FormsModule }     from '@angular/forms';

import { LoginRoutingModule } from './login-routing.module';
import { AuthFacadeService }     from './services/AuthFacade.Service';
import { RegisterService } from './services/registrer/register.service';
import { SignInService }    from './services/singIn/singIn.service';

@NgModule({
  declarations: [
    AuthFacadeService,
    RegisterService,
    SignInService,
  ],
  imports: [
    CommonModule,
    FormsModule,
    LoginRoutingModule
  ]
})
export class LoginModule {}
