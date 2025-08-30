
import { NgModule }        from '@angular/core';
import { CommonModule }    from '@angular/common';
import { FormsModule }     from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthFacadeService }  from './services/AuthFacade.service';
@NgModule({
  declarations: [
    AuthFacadeService,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule
  ]
})
export class AuthModule {}
