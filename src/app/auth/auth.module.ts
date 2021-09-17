import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuthRoutingModule} from './auth-routing.module';
import {AuthComponent} from './auth.component';
import {SharedModule} from '../shared/shared/shared.module';
import {ToolbarComponent} from './shared/components/toolbar/toolbar.component';
import {HomeComponent} from './home/home.component';


@NgModule({
  declarations: [
    AuthComponent,
    HomeComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AuthRoutingModule
  ]
})
export class AuthModule {
}
