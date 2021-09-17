import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import {AuthComponent} from './auth.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {SharedModule} from '../shared/shared/shared.module';
import {HomeComponent} from './home/home.component';


@NgModule({
  declarations: [
      AuthComponent,
      HomeComponent,
      LoginComponent,
      RegisterComponent
  ],
  imports: [
    CommonModule,
      SharedModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
