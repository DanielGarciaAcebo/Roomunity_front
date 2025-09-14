import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AuthRoutingModule } from './auth-routing.module';

import { EntryComponent } from './pages/entry.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { RegisterComponent } from './pages/register/register.component';

import { AuthFacadeService } from './services/auth-facade.service';
import { RegisterService } from './services/register/register.service';
import { SignInService } from './services/sign-in/sign-in.service';

@NgModule({
  declarations: [
    EntryComponent,
    SignInComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AuthRoutingModule,
  ],
  providers: [
    AuthFacadeService,
    RegisterService,
    SignInService,
  ]
})
export class AuthModule {}
