import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
    imports: [
      CommonModule,
        RouterModule.forChild([
            {path: 'login', component: LoginComponent},
            {path: 'register', component: RegisterComponent}
        ]),
        FormsModule,
        MatCardModule,
        MatInputModule,
        MatButtonModule
],
  exports: [
    LoginComponent,
    RegisterComponent
  ]
})
export class AuthModule { }
