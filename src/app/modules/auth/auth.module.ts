import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RouterModule } from '@angular/router';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

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
],
  exports: [
    LoginComponent,
    RegisterComponent
  ]
})
export class AuthModule { }
