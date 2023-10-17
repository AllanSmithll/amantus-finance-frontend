import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import {FormsModule} from "@angular/forms";



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
        FormsModule
    ],
  exports: [
    LoginComponent,
    RegisterComponent
  ]
})
export class AuthModule { }
